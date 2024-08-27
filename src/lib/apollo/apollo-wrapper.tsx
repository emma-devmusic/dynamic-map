"use client";

import {
    // ApolloClient,
    ApolloLink,
    HttpLink,
} from "@apollo/client";
import {
    ApolloNextAppProvider,
    SSRMultipartLink,
    ApolloClient,
    InMemoryCache
} from "@apollo/experimental-nextjs-app-support";

function makeClient(): any {
    const httpLink = new HttpLink({
        uri: "https://countries.trevorblades.com/",
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    new SSRMultipartLink({
                        stripDefer: true,
                    }),
                    httpLink,
                ])
                : httpLink,
    });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}