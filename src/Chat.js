import React, {Component} from "react";

class KommunicateChat extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    (function (d, m) {
      const kommunicateSettings = {
        appId: "3074e04cffc3eead1df5c16c3c85fae8e",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      const h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }

  render() {
    return <div></div>;
  }
}

export default KommunicateChat;
