import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { HttpClient } from '@angular/common/http';
import { EMPTY, of, throwError } from 'rxjs';
describe('PostsComponent', () => {
  let component: PostsComponent;
  let service: PostsService;

  beforeEach(() => {
    // @ts-ignore
    const http = new HttpClient();
    service = new PostsService(http);
    component = new PostsComponent(service);
  });

  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should update posts length after ngOnInit', () => {
    const posts = [1, 2, 3];
    spyOn(service, 'fetch').and.returnValue(of(posts));

    component.ngOnInit();

    expect(component.posts.length).toBe(posts.length);
  });

  it('should add new post', () => {
    const post = { title: 'test' };
    const spy = spyOn(service, 'create').and.returnValue(of(post));

    component.add(post.title);
    expect(spy).toHaveBeenCalled();
    expect(component.posts.includes(post)).toBeTruthy();
  });

  it('should return error message', () => {
    const error = 'Error message';
    spyOn(service, 'create').and.returnValue(throwError(error));

    component.add('Post title');

    expect(component.message).toBe(error);
  });

  it('should remove post if user confirm', () => {
    const itemId = 10;
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(true);

    component.delete(itemId);

    expect(spy).toHaveBeenCalledWith(itemId);
  });

  it('should NOT remove post if user not confirm', () => {
    const itemId = 10;
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(false);

    component.delete(itemId);

    expect(spy).not.toHaveBeenCalled();
  });
});
