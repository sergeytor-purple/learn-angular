import { PostsComponent } from "./posts.component";
import { PostsService } from "./posts.service";
import {
  ComponentFixture,
  TestBed,
  async,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";

describe("PostsComponent", () => {
  let fixture: ComponentFixture<PostsComponent>;
  let component: PostsComponent;
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [PostsService],
      imports: [HttpClientModule],
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    // service = fixture.debugElement.injector.get(PostsService)
    service = TestBed.get(PostsService);
  });

  it("should fetch posts on ngOnInit (promise)", fakeAsync(() => {
    const posts = [1, 2, 3];
    spyOn(service, "fetchPromise").and.returnValue(Promise.resolve(posts));

    fixture.detectChanges();

    tick();

    expect(component.posts.length).toBe(posts.length);

    // fixture.whenStable().then(() => {
    //   expect(component.posts.length).toBe(posts.length);
    // });
  }));
});
