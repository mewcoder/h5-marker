export function insertAfter(newEle, targetEle) {
  let parent = targetEle.parentNode;
  if (parent.lastChild == targetEle) {
    parent.appendChild(newEle);
  } else {
    parent.insertBefore(newEle, targetEle.nextSibling);
  }
}
