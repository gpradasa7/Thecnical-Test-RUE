const PutData = async (url, object = {}) => {
  try {
    let res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(object),
      headers: {
        mode: "no-cors",
        "Content-type": "application/json; charset=utf-8",
      },
    });

    let data = await res.json();
    console.log(data);
    alert("Información actualizada");
  } catch (error) {
    alert("Hubo un error", error);
  }
};

export default PutData;
