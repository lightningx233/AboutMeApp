import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Hi, I'm <span class="highlight">{{ name }}</span>
          </h1>
          <h2 class="hero-subtitle">{{ title }}</h2>
          <p class="hero-description">{{ description }}</p>
          <div class="hero-buttons">
            <a routerLink="/about" class="btn btn-primary">About Me</a>
            <a routerLink="/skills" class="btn btn-secondary">My Skills</a>
          </div>
        </div>
       <div class="hero-image">
  <div class="profile-picture">
    <img src="assets/images/testimage.jpg" alt="Profile Picture" />
  </div>
</div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      position: relative;
    }

    .hero-content {
      max-width: 1200px;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-text {
      color: white;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .highlight {
      color: #FFD700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .hero-subtitle {
      font-size: 1.8rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .hero-description {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      border: 2px solid;
      display: inline-block;
    }

    .btn-primary {
      background: #FFD700;
      color: #333;
      border-color: #FFD700;
    }

    .btn-primary:hover {
      background: transparent;
      color: #FFD700;
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: transparent;
      color: white;
      border-color: white;
    }

    .btn-secondary:hover {
      background: white;
      color: #333;
      transform: translateY(-2px);
    }

    .hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .profile-picture {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease;
    }

    .profile-picture:hover {
      transform: scale(1.05);
    }

    .profile-picture img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
    }

    .mouse {
      width: 30px;
      height: 50px;
      border: 2px solid rgba(255, 255, 255, 0.5);
      border-radius: 25px;
      position: relative;
    }

    .wheel {
      width: 4px;
      height: 10px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 2s infinite;
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }

    @keyframes scroll {
      0% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
      }
    }

    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.4rem;
      }

      .hero-description {
        font-size: 1rem;
      }

      .profile-picture {
        width: 250px;
        height: 250px;
      }

      .hero-buttons {
        justify-content: center;
      }
    }
  `]
})
export class HomeComponent {
  name = 'Yumi';
  title = 'Full Stack Developer';
  description = 'Passionate about creating amazing web experiences with modern technologies. I wanna kms';
}