function getUser() {
  if (Math.random() > 0.5) {
    return null;
  } else {
    return {
      name: "Vlad",
    };
  }
}

const useer = getUser();

if (useer) {
  const user5 = useer.name;
}
