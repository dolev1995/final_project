class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
      console.log('this is:');
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }