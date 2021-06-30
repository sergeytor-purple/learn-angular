import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PostsService } from "../posts.service";
import { Post } from "../../../../../components/components/src/app/app.component";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private PostsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.post = this.PostsService.getById(+params.id);
    });
  }

  loadPost() {
    this.router.navigate(["/posts", 44]);
  }
}
