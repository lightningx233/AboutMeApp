import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <h2>{{ name }}</h2>
        </div>
        <ul class="nav-menu" [class.active]="isMenuOpen">
          <li class="nav-item">
            <a routerLink="/home" 
               routerLinkActive="active" 
               class="nav-link"
               (click)="closeMenu()">Home</a>
          </li>
          <li class="nav-item">
            <a routerLink="/about" 
               routerLinkActive="active" 
               class="nav-link"
               (click)="closeMenu()">About</a>
          </li>
          <li class="nav-item">
            <a routerLink="/skills" 
               routerLinkActive="active" 
               class="nav-link"
               (click)="closeMenu()">Skills</a>
          </li>
        </ul>
        <div class="nav-toggle" (click)="toggleMenu()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      padding: 1rem 0;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-logo h2 {
      color: #667eea;
      font-weight: 700;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
    }

    .nav-link {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 25px;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-link:hover,
    .nav-link.active {
      color: #667eea;
      background: rgba(102, 126, 234, 0.1);
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }

    .bar {
      width: 25px;
      height: 3px;
      background: #333;
      margin: 3px 0;
      transition: 0.3s;
      border-radius: 3px;
    }

    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.98);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        padding: 2rem 0;
      }

      .nav-menu.active {
        left: 0;
      }

      .nav-toggle {
        display: flex;
      }

      .nav-toggle.active .bar:nth-child(2) {
        opacity: 0;
      }

      .nav-toggle.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      .nav-toggle.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  `]
})
export class NavbarComponent {
  name = 'Yumi'; // Change this to your name
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}