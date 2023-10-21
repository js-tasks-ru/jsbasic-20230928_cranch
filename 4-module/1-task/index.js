function makeFriendsList(friends) {
  let list = document.createElement('UL');
  for (let i in friends) {
    let listItem = document.createElement('LI');
    listItem.innerText = `${friends[i].firstName} ${friends[i].lastName}`;
    list.appendChild(listItem);
  }
  return list;
}
