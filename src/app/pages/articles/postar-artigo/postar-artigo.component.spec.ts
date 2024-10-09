import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostarArtigoComponent } from './postar-artigo.component';

describe('PostarArtigoComponent', () => {
  let component: PostarArtigoComponent;
  let fixture: ComponentFixture<PostarArtigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostarArtigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostarArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
