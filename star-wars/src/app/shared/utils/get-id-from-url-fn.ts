export function getIdFromUrl(url: string): string {
  const splittedSegments = url.split('/');

  return splittedSegments[splittedSegments.length - 2];
}
