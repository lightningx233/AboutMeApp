import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section">
      <div class="container">
        <h1 class="section-title">About Me</h1>
        
        <div class="about-content">
          <div class="about-text">
            <div class="story-card">
              <h2>My Story</h2>
              <p>{{ story }}</p>
            </div>
            
            <div class="interests-card">
              <h2>What I Love</h2>
              <div class="interests-grid">
                <div *ngFor="let interest of interests" class="interest-item">
                  <span class="interest-icon">{{ interest.icon }}</span>
                  <h3>{{ interest.title }}</h3>
                  <p>{{ interest.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-stats">
            <div class="stats-card">
              <h2>Quick Facts</h2>
              <div class="stats-grid">
                <div *ngFor="let stat of stats" class="stat-item">
                  <div class="stat-number">{{ stat.number }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>
            
            <div class="timeline-card">
              <h2>Journey</h2>
              <div class="timeline">
                <div *ngFor="let item of timeline" class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <h4>{{ item.title }}</h4>
                    <span class="timeline-date">{{ item.date }}</span>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      min-height: 100vh;
      padding: 4rem 2rem;
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 3rem;
      color: #FFD700;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 3rem;
    }

    .story-card, .interests-card, .stats-card, .timeline-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 2rem;
      margin-bottom: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .story-card h2, .interests-card h2, .stats-card h2, .timeline-card h2 {
      color: #FFD700;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }

    .story-card p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.9);
    }

    .interests-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .interest-item {
      text-align: center;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 15px;
      transition: transform 0.3s ease;
    }

    .interest-item:hover {
      transform: translateY(-5px);
    }

    .interest-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 1rem;
    }

    .interest-item h3 {
      color: #FFD700;
      margin-bottom: 0.5rem;
    }

    .interest-item p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .stat-item {
      text-align: center;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: #FFD700;
    }

    .stat-label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
    }

    .timeline {
      position: relative;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #FFD700;
    }

    .timeline-item {
      position: relative;
      padding-left: 3rem;
      margin-bottom: 2rem;
    }

    .timeline-dot {
      position: absolute;
      left: -20px;
      top: 0;
      width: 12px;
      height: 12px;
      background: #FFD700;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.1);
    }

    .timeline-content h4 {
      color: #FFD700;
      margin-bottom: 0.5rem;
    }

    .timeline-date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
    }

    .timeline-content p {
      color: rgba(255, 255, 255, 0.8);
      margin-top: 0.5rem;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .interests-grid {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {
  story = `I'm a passionate developer with a love for creating innovative web solutions. My journey in tech started during college when I discovered the magic of turning ideas into functional applications. Since then, I've been constantly learning and evolving, staying up-to-date with the latest technologies and best practices. I believe in writing clean, maintainable code and creating user experiences that truly make a difference.`;

  interests = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building responsive and modern web applications'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Exploring new technologies and creative solutions'
    },
    {
      icon: '📚',
      title: 'Learning',
      description: 'Continuously expanding my knowledge and skills'
    }
  ];

  stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
    { number: '100%', label: 'Dedication' }
  ];

  timeline = [
    {
      title: 'Started Learning Web Development',
      date: '2021',
      description: 'Began my journey with HTML, CSS, and JavaScript'
    },
    {
      title: 'First Angular Project',
      date: '2022',
      description: 'Built my first Angular application and fell in love with the framework'
    },
    {
      title: 'Full Stack Development',
      date: '2023',
      description: 'Expanded skills to include backend technologies and databases'
    },
    {
      title: 'Current Focus',
      date: '2024',
      description: 'Specializing in modern frameworks and cloud technologies'
    }
  ];
}