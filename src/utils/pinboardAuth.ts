export const PINBOARD_CREDENTIALS_REQUIRED =
  'Pinboard credentials are required.';

export function buildPinboardAuthHeader(
  user: string | null | undefined,
  token: string | null | undefined
): string | null {
  const trimmedUser = user?.trim() || '';
  const trimmedToken = token?.trim() || '';
  if (!trimmedUser || !trimmedToken) {
    return null;
  }
  return `Basic ${btoa(`${trimmedUser}:${trimmedToken}`)}`;
}
