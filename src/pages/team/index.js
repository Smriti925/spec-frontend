// Import Components
import TeamCard from "components/UI/Card/Teamcard";
import React, { Component, useState } from "react";
import { teamURL } from "assets/utils/Routes";
import Layout from "components/UI/Layout/Layout";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";
import Head from "assets/utils/helmet";

// Import Styles
import "assets/styles/teampage.css";

// Import/Define Constants
const FinalYear = [
  "President",
  "Vice President",
  "Technical Lead",
  "Web Development Head",
  "Public Relation Head",
  "Finance Head",
];
const team_posts = ["Final Year", "Coordinator", "Executive", "Volunteer"];
const juniorPosts = ["Coordinator", "Executive", "Volunteer"];

class TeamPage extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      wait: true,
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get(teamURL)
      .then((response) => {
        this.setState({
          data: response.data.sort((a, b) => a.name.localeCompare(b.name)),
          wait: false
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({error: true})
      });
  }
  Selected_Post = (e) => {
    this.setState({ selected_post: e.target.value });
  };
  render() {
    if (this.state.wait){
      return(
        <>
      <Head title="Team" />
        <Layout>
        <div className="flex h-90v justify-center items-center">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={100000} // 10 secs wait until error message shows
          />
        </div>
        </Layout>
       </>
      )
    }
    else{
      return (
        <>
      <Head title="Team" />
          <Layout>
          
        <h1 className="text-5xl font-bold text-center mt-16 ">
          TEAM SPEC
        </h1>
             <div className="flex mt-5 xl:mr-20  justify-center xl:justify-end px-auto">
              <span className="mt-16 ml-2 mr-2 ">
                <FontAwesomeIcon icon={faFilter} size="1x" />
              </span>
              <select
                className="h-10 text-white bg-zinc-800  rounded-lg p-2 font-monty "
                onChange={this.Selected_Post}
              >
                <option value={" "}>Team SPEC</option>
                {team_posts.map((obj) => (
                  <option value={obj}>{obj}</option>
                ))}
              </select>
            </div>
           
            {this.state.selected_post === "Final Year" ? (
              <>
                {" "}
                <div>
                  {this.state.data.find((e) => FinalYear.includes(e.title)) ? (
                    <h1 className="font-monty text-white text-4xl text-center m-3 mb-16">
                      {this.state.selected_post + " Members"}
                    </h1>
                  ) : null}
                  <section className=" pb-12 flex justify-center">
                    <div className=" flex flex-row flex-wrap justify-center gap-4 ">
                      {FinalYear.map((obj) => (
                        <>
                          {this.state.data.map(
                            (element, index) =>
                              element.title === obj && (
                                <TeamCard data={element} key={element.id} />
                              )
                          )}
                        </>
                      ))}
                    </div>
                  </section>
                </div>
              </>
            ) : juniorPosts.includes(this.state.selected_post) ? (
              <>
                <div>
                  <h1 className="font-monty text-white text-4xl text-center m-3 mb-16">
                    {this.state.selected_post + "s"}
                  </h1>
                  <section className=" pb-12 flex justify-center">
                    <div className="flex flex-row flex-wrap justify-center gap-4 ">
                      {this.state.data.map(
                        (element, index) =>
                          element.title === this.state.selected_post && (
                            <TeamCard data={element} key={element.id} />
                          )
                      )}
                    </div>
                  </section>
                </div>
              </>
            ) : (
              <>
                <div>
                  {this.state.data.find((e) => FinalYear.includes(e.title)) ? (
                    <h1 className="font-monty text-white text-4xl text-center m-3 mb-16">
                      Final Year Members
                    </h1>
                  ) : null}
                  <section className=" pb-12 flex justify-center">
                    <div className="flex flex-row flex-wrap justify-center gap-4 ">
                      {FinalYear.map((obj) => (
                        <>
                          {this.state.data.map(
                            (element, index) =>
                              element.title === obj && (
                                <TeamCard data={element} key={element.id} />
                              )
                          )}
                        </>
                      ))}
                    </div>
                  </section>
                </div>
                <div>
                  {juniorPosts.map((obj) => (
                    <div>
                      {this.state.data.find((e) => e.title === obj) ? (
                        <h1 className="font-monty text-white text-4xl text-center m-3 mb-16">
                          {obj + "s"}
                        </h1>
                      ) : null}
                      <h1 className="font-monty text-white text-4xl text-center m-3 mb-16"></h1>
                      <section className="pb-12 flex justify-center">
                        <div className="flex flex-row flex-wrap justify-center gap-4 ">
                          {this.state.data.map(
                            (element, index) =>
                              element.title === obj && (
                                <TeamCard data={element} key={element.id} />
                              )
                          )}
                        </div>
                      </section>
                    </div>
                  ))}
                </div>
              </>
            )}{" "}
      
          </Layout>
          </>
      );
    }
  }
}
export default TeamPage;
