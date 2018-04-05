import Vue from "vue";
import Router from "vue-router";
import Books from "@/components/Books";
import BookDetails from "@/components/BookDetails";
import ReadingChallenge from "@/components/ReadingChallenge";
import WantToRead from "@/components/WantToRead";
import Completed from "@/components/Completed";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Books",
      component: Books
    },
    {
      path: "/book-details",
      name: "BookDetails",
      component: BookDetails
    },
    {
      path: "/completed",
      name: "Completed",
      component: Completed
    },
    {
      path: "/want-to-read",
      name: "Want to Read",
      component: WantToRead
    },
    {
      path: "/reading-challenge",
      name: "Reading challennge",
      component: ReadingChallenge
    }
  ]
});
