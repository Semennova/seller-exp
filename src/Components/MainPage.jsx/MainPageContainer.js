import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setStoriesTC } from "../../Redux/App-reducer";
import { MainPage } from "./MainPage";

export const MainPageApiContainer = (props) => {
    useEffect(()=> {
        props.setStoriesTC()
    }, [])

    return <MainPage stories={props.stories}/>
}
const mapStateToProps = (state) => ({
    stories: state.app.stories,
    storiesIdies: state.app.storiesIdies
})

export const MainPageContainer = connect(mapStateToProps, { setStoriesTC })(MainPageApiContainer)