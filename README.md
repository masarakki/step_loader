# StepLoader

step-by-step resource loader

# examples

```js

import stepLoader from 'step_loader';

const rangeLoader = stepLoader.rangeRequest('https://example.com/long_video.mp4');
rangeLoader.get(0);
rangeLoader.get(1);

const filesLoader = stepLoader.getUrls(['https://example.com/img1.jpg', 'https://example.com/img2.jpg']);
filesLoader.get(0);
filesLoader.get(1);

```
