import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GithubApiService } from '../services/github-api.service';
import { firstValueFrom } from 'rxjs';

// TODO: use storybook for testing

describe('GithubApiService', () => {
  var httpTesting: HttpTestingController;
  var githubApiService: GithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GithubApiService,
        provideHttpClient(),
        // provideHttpClientTesting(),
      ],
    });
    httpTesting = TestBed.inject(HttpTestingController);
    githubApiService = TestBed.inject(GithubApiService);
  });

  it("should list all repositories", async () => {
    const config$ = githubApiService.getRepositories("xerner");
    const configPromise = firstValueFrom(config$);
    // At this point, the request is pending, and we can assert it was made
    // via the `HttpTestingController`:
    const req = httpTesting.expectOne('/api/config', 'Request to load the configuration');
    // We can assert various properties of the request if desired.
    expect(req.request.method).toBe('GET');
    // Flushing the request causes it to complete, delivering the result.
    req.flush([]);
    // We can then assert that the response was successfully delivered by the `ConfigService`:
    expect(await configPromise).toEqual([]);
  })

  afterEach(() => {
    httpTesting.verify();
  });
});
