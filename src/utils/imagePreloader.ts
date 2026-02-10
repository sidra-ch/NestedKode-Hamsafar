class ImagePreloader {
  private preloadedImages: Set<string> = new Set();

  preloadImages = (imageUrls: string[]): Promise<void[]> => {
    const promises = imageUrls.map(url => {
      if (this.preloadedImages.has(url)) {
        return Promise.resolve();
      }

      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          this.preloadedImages.add(url);
          resolve();
        };
        img.onerror = () => reject();
        img.src = url;
      });
    });

    return Promise.all(promises);
  };

  preloadCriticalImages = (): Promise<void[]> => {
    const criticalImages = [
      '/assets/img/afghanistan/image-14.avif',
      '/assets/img/afghanistan/image-15.avif',
      '/assets/img/afghanistan/image-16.avif',
      '/assets/img/afghanistan/image-17.avif',
      '/assets/img/afghanistan/image-18.avif',
    ];

    return this.preloadImages(criticalImages);
  };

  isPreloaded = (url: string): boolean => {
    return this.preloadedImages.has(url);
  };
}

export default new ImagePreloader();
