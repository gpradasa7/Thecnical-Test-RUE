const DeleteData = async (url, {}) => {
  try {
    let res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });

    alert("Informacion eliminada");
    console.log(res);
  } catch (error) {
    alert("Hubo un error", error);
  }
};

export default DeleteData;
