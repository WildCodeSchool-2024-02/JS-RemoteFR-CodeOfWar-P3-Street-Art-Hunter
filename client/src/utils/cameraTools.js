export function getVideo(setIsOpen, videoRef) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      const video = videoRef.current;
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error(err);
    });
  setIsOpen(true);
}

export function takePhoto(setPhotoBlob, setIsOpen, videoRef, photoRef) {
  const width = 400;
  const height = 300;

  const video = videoRef.current;
  const photo = photoRef.current;

  if (!video || !photo) {
    console.error("Ne peut pas être false");
  }

  photo.width = width;
  photo.height = height;

  const ctx = photo.getContext("2d");
  ctx.drawImage(video, 0, 0, width, height);

  photo.toBlob((blob) => {
    setPhotoBlob(blob);
    setIsOpen(false);
  }, "image/png");
}
