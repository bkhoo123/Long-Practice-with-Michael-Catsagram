export const buildStorage = () => {
  const { addCat, votes, addComment } = localStorage;

  localStorage.setItem("addCat", addCat ? addCat : "");
  localStorage.setItem("votes", votes ? votes : 0);
  localStorage.setItem("addComment", addComment ? addComment : JSON.stringify([]));
}

export const clearStorageValues = () => {
  localStorage.clear();
  buildStorage();
}



// initializePage()
//     addCat()
//     votes()
//     erase()
