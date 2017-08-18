const foo = () => ({
  bar() {
    const that = this;
    setTimeout(function() {
      somethingElse.bar.call(that, arguments);
    }, 0);
  }

  // however the following doesn't cause any problems:

  // bar() {
  //   setTimeout(() => {
  //     somethingElse.bar.call(that, arguments);
  //   }, 0);
  // }
});

export default foo;
