export const sendMail = async (data, key) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => formData.append(key, data[key]));

  fetch(`https://formspree.io/f/${key}`, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  }).then(() => location.href = 'thx/'
  );
};
