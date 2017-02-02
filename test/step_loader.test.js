import test from 'ava';
import stepLoader from 'step_loader';

test('fetch urls', t => {
  const resources = ['https://google.com', 'https://twitter.com', 'http://nicovideo.jp'];
  const loader = stepLoader.getUrls(resources);
});

test('fetch long video', t => {
  const url = 'https://video.mp4';
  const loader = stepLoader.rangeRequest(url, 300 * 1024);
});
