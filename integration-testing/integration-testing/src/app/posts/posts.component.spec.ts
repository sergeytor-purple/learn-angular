import { PostsComponent } from "./posts.component";
import { PostsService } from "./posts.service";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { PostComponent } from "../../../../../components/components/src/app/post/post.component";
import { HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";

describe("PostsComponent", () => {
  let fixture: ComponentFixture<PostComponent>;
  let component: PostsComponent | any;
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      providers: [PostsService],
      imports: [HttpClientModule],
    });

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    // service = fixture.debugElement.injector.get(PostsService)
    service = TestBed.get(PostsService);
  });

  it("should fetch posts on ngOnInit", () => {
    const posts = [1, 2, 3];

    spyOn(service, "fetch").and.returnValue(of(posts));

    fixture.detectChanges();

    expect(component.posts).toEqual(posts);
  });
});
