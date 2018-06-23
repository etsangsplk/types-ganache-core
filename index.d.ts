declare module 'ganache-core' {
    import * as Web3 from 'web3'

    namespace Ganache {
        export function provider(): Web3.Provider
    }

    export = Ganache
}