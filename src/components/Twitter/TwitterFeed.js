import React from "react";
// noinspection ES6CheckImport
import {Timeline} from "react-twitter-widgets";

/*export default {
  title: "Timeline",
  component: Timeline,
};*/

export const ProfileBasic = () => (
    <Timeline dataSource={{sourceType: "profile", screenName: "GlobalDigitalC3"}}/>
);

export const ProfileLoadingError = () => (
    <Timeline
        dataSource={{sourceType: "profile", screenName: `${Math.random()}`}}
        renderError={(_err) =>
            "Could not load timeline! ...Your custom component here"
        }
    />
);

export const ProfileSmaller = () => (
    <Timeline
        dataSource={{sourceType: "profile", screenName: "GlobalDigitalC3"}}
        options={{width: "800", height: "800"}}
    />
);

export const ProfileDarkTheme = () => (
    <Timeline
        dataSource={{sourceType: "profile", screenName: "GlobalDigitalC3"}}
        options={{theme: "dark", width: "1200", height: "800"}}
    />
);

export const ProfileBorderColor = () => (
    <Timeline
        dataSource={{sourceType: "profile", screenName: "GlobalDigitalC3"}}
        options={{borderColor: "#FF0000", width: "400", height: "600"}}
    />
);

export const ProfileNoHeaderOrFooter = () => (
    <Timeline
        dataSource={{sourceType: "profile", screenName: "GlobalDigitalC3"}}
        options={{chrome: "noheader, nofooter", width: "400", height: "600"}}
    />
);

export const ProfileDoNotTrack = () => (
    <Timeline
        dataSource={{sourceType: "profile", screenName: "GlobalDigitalC3"}}
        options={{dnt: true, width: "400", height: "600"}}
    />
);

export const ProfileJapanese = () => (
    <Timeline
        dataSource={{sourceType: "profile", screenName: "GlobalDigitalC3"}}
        options={{lang: "ja", width: "400", height: "600"}}
    />
);

export const ListBasic = () => (
    <Timeline
        dataSource={{
            sourceType: "list",
            ownerScreenName: "twitter",
            id: "214727905",
        }}
    />
);

export const UrlBasic = () => (
    <Timeline
        dataSource={{sourceType: "url", url: "https://twitter.com/reactjs"}}
    />
);
