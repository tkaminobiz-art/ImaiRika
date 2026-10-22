// Record only the runtime version in private server logs, without a public diagnostic route.
export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.info(`[security-runtime-20261022] node=${process.version}`);
  }
}
