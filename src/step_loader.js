class StepLoader {
  constructor(sizeMethod, fetchMethod, initialIndex = 0, prefetchLength = 1) {
    sizeMethod().then(l => this.length = Math.ceil(l));
    this.fetchMethod = fetchMethod;
    this.fetchedResults = [];
  }
}

export const getUrls = (urls, fetchOptions) => {
  return new StepLoader(
    () => Promise.resolve(urls.length),
    (index) => {
      return fetch(urls[index], fetchOptions);
    });
};

export const rangeRequest = (url, size, fetchOptions = {}) => {
  return new StepLoader(
    () => {
      return fetch(url, { ...fetchOptions,  method: 'HEAD'}).
        then(res => res.headers['Content-Length']).
        then(len => len / size);
    },
    (index) => {
      const firstBytePos = index * size;
      const lastBytePos = firstBytePos + size;
      return fetch(url, { ...fetchOptions,
                          method: 'GET',
                          headers: {
                            'Content-Range': `bytes ${firstBytePost}-${lastBytePos}`
                          }
                        });
    });
};

export default {
  getUrls,
  rangeRequest
};
