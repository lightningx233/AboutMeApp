import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-section">
      <div class="container">
        <h1 class="section-title">My Skills</h1>
        
        <div class="skills-content">
          <div class="technical-skills">
            <h2>Technical Skills</h2>
            <div class="skills-grid">
              <div *ngFor="let skill of technicalSkills" class="skill-card">
                <div class="skill-icon">{{ skill.icon }}</div>
                <h3>{{ skill.name }}</h3>
                <div class="skill-level">
                  <div class="skill-bar">
                    <div class="skill-progress" 
                         [style.width.%]="skill.level"
                         [style.animation-delay]="skill.delay + 'ms'"></div>
                  </div>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <p>{{ skill.description }}</p>
              </div>
            </div>
          </div>

          <div class="soft-skills">
            <h2>Soft Skills</h2>
            <div class="soft-skills-grid">
              <div *ngFor="let skill of softSkills" class="soft-skill-item">
                <div class="soft-skill-icon">{{ skill.icon }}</div>
                <div class="soft-skill-content">
                  <h4>{{ skill.name }}</h4>
                  <p>{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tools-technologies">
            <h2>Tools & Technologies</h2>
            <div class="tools-grid">
              <div *ngFor="let tool of tools" class="tool-item">
                <span class="tool-icon">{{ tool.icon }}</span>
                <span class="tool-name">{{ tool.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section {
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

    .skills-content h2 {
      color: #FFD700;
      font-size: 2rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .technical-skills, .soft-skills, .tools-technologies {
      margin-bottom: 4rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .skill-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .skill-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .skill-icon {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    .skill-card h3 {
      color: #FFD700;
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .skill-level {
      margin-bottom: 1rem;
    }

    .skill-bar {
      background: rgba(255, 255, 255, 0.2);
      height: 10px;
      border-radius: 5px;
      overflow: hidden;
      margin-bottom: 0.5rem;
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, #FFD700, #FFA500);
      border-radius: 5px;
      animation: fillBar 2s ease-in-out forwards;
      width: 0%;
    }

    .skill-percentage {
      color: #FFD700;
      font-weight: 600;
      float: right;
    }

    .skill-card p {
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      line-height: 1.6;
    }

    @keyframes fillBar {
      from {
        width: 0%;
      }
      to {
        width: var(--target-width);
      }
    }

    .soft-skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .soft-skill-item {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: transform 0.3s ease;
    }

    .soft-skill-item:hover {
      transform: translateX(10px);
    }

    .soft-skill-icon {
      font-size: 2.5rem;
      min-width: 60px;
      text-align: center;
    }

    .soft-skill-content h4 {
      color: #FFD700;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    .soft-skill-content p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .tools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }

    .tool-item {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .tool-item:hover {
      background: rgba(255, 215, 0, 0.1);
      border-color: #FFD700;
      transform: scale(1.05);
    }

    .tool-icon {
      font-size: 2rem;
    }

    .tool-name {
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
      text-align: center;
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 2.5rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }

      .soft-skills-grid {
        grid-template-columns: 1fr;
      }

      .tools-grid {
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      }

      .soft-skill-item {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  technicalSkills = [
    {
      name: 'Angular',
      level: 90,
      icon: '🅰️',
      delay: 200,
      description: 'Expert in building scalable web applications with Angular framework'
    },
    {
      name: 'TypeScript',
      level: 85,
      icon: '📘',
      delay: 400,
      description: 'Strong knowledge of TypeScript for type-safe development'
    },
    {
      name: 'JavaScript',
      level: 88,
      icon: '🟨',
      delay: 600,
      description: 'Proficient in modern JavaScript ES6+ features and patterns'
    },
    {
      name: 'HTML/CSS',
      level: 92,
      icon: '🎨',
      delay: 800,
      description: 'Expert in semantic HTML and modern CSS including Flexbox & Grid'
    },
    {
      name: 'Node.js',
      level: 75,
      icon: '💚',
      delay: 1000,
      description: 'Backend development with Node.js and Express framework'
    },
    {
      name: 'Database',
      level: 70,
      icon: '🗄️',
      delay: 1200,
      description: 'Experience with SQL and NoSQL databases'
    }
  ];

  softSkills = [
    {
      name: 'Problem Solving',
      icon: '🧩',
      description: 'Analytical thinking and creative problem-solving approach'
    },
    {
      name: 'Team Collaboration',
      icon: '🤝',
      description: 'Effective communication and teamwork in agile environments'
    },
    {
      name: 'Leadership',
      icon: '👑',
      description: 'Leading projects and mentoring junior developers'
    },
    {
      name: 'Adaptability',
      icon: '🔄',
      description: 'Quick to learn new technologies and adapt to changes'
    },
    {
      name: 'Time Management',
      icon: '⏰',
      description: 'Efficient project planning and deadline management'
    },
    {
      name: 'Communication',
      icon: '💬',
      description: 'Clear technical communication with both technical and non-technical stakeholders'
    }
  ];

  tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Git', icon: '🌿' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Postman', icon: '📮' },
    { name: 'Jenkins', icon: '🔧' },
    { name: 'Webpack', icon: '📦' },
    { name: 'npm', icon: '📋' },
    { name: 'Chrome DevTools', icon: '🔍' }
  ];

  ngOnInit() {
    // Trigger animation after component loads
    setTimeout(() => {
      this.animateSkillBars();
    }, 500);
  }

  private animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
      const skill = this.technicalSkills[index];
      if (skill) {
        (bar as HTMLElement).style.setProperty('--target-width', `${skill.level}%`);
      }
    });
  }
}