import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Trophy" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">ФУТБОЛ</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'history', label: 'История', icon: 'Clock' },
                { id: 'coaches', label: 'Тренеры', icon: 'Users' },
                { id: 'ronaldo', label: 'Роналду', icon: 'Star' },
                { id: 'goals', label: 'Голы', icon: 'Target' },
                { id: 'contact', label: 'Контакты', icon: 'Mail' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
          <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              ВЕЛИЧИЕ ФУТБОЛА
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Погрузитесь в мир самой красивой игры планеты. История, легенды, эмоции и страсть миллионов болельщиков.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('history')} className="animate-scale-in">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Узнать историю
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('goals')} className="animate-scale-in">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть голы
              </Button>
            </div>
          </div>
        </section>

        <section id="history" className="min-h-screen py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                <Icon name="Clock" size={48} className="text-primary" />
                ИСТОРИЯ ФУТБОЛА
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                От древних игр с мячом до современного профессионального спорта
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  year: '1863',
                  title: 'Рождение современного футбола',
                  description: 'В Англии основана первая футбольная ассоциация. Утверждены единые правила игры.',
                  icon: 'Sparkles',
                },
                {
                  year: '1930',
                  title: 'Первый чемпионат мира',
                  description: 'Уругвай принимает первый чемпионат мира по футболу и становится первым чемпионом.',
                  icon: 'Trophy',
                },
                {
                  year: '1958',
                  title: 'Восхождение Пеле',
                  description: 'Молодой бразилец Пеле в 17 лет выигрывает чемпионат мира и начинает эру доминирования.',
                  icon: 'Zap',
                },
                {
                  year: '1992',
                  title: 'Эра Лиги Чемпионов',
                  description: 'УЕФА запускает Лигу Чемпионов — самый престижный клубный турнир в мире.',
                  icon: 'Award',
                },
                {
                  year: '2000-е',
                  title: 'Золотая эра Месси и Роналду',
                  description: 'Два величайших игрока современности устанавливают невероятные рекорды.',
                  icon: 'Star',
                },
              ].map((event, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-primary hover:border-l-accent transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name={event.icon as any} size={32} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl font-bold text-primary">{event.year}</span>
                          <h3 className="text-2xl font-bold">{event.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-lg">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold mb-4">Почему мы любим футбол?</h3>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {[
                      { icon: 'Heart', title: 'Эмоции', text: 'Невероятные переживания и страсть' },
                      { icon: 'Users', title: 'Единство', text: 'Объединяет миллионы людей по всему миру' },
                      { icon: 'Zap', title: 'Драма', text: 'Непредсказуемость и волнующие моменты' },
                    ].map((reason, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Icon name={reason.icon as any} size={32} className="text-primary" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                        <p className="text-muted-foreground">{reason.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="coaches" className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                <Icon name="Users" size={48} className="text-secondary" />
                ЗНАМЕНИТЫЕ ТРЕНЕРЫ
              </h2>
              <p className="text-xl text-muted-foreground">Тактические гении, изменившие футбол</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Алекс Фергюсон',
                  team: 'Манчестер Юнайтед',
                  achievements: '13 чемпионств АПЛ, 2 Лиги Чемпионов',
                  years: '1986-2013',
                  icon: 'Crown',
                },
                {
                  name: 'Пеп Гвардиола',
                  team: 'Барселона, Бавария, Манчестер Сити',
                  achievements: '3 Лиги Чемпионов, 11 национальных чемпионств',
                  years: '2008-настоящее время',
                  icon: 'Brain',
                },
                {
                  name: 'Карло Анчелотти',
                  team: 'Милан, Реал Мадрид, Бавария',
                  achievements: '4 Лиги Чемпионов, мастер адаптации',
                  years: '1995-настоящее время',
                  icon: 'Trophy',
                },
                {
                  name: 'Жозе Моуринью',
                  team: 'Порту, Челси, Интер, Реал',
                  achievements: '2 Лиги Чемпионов, 8 национальных чемпионств',
                  years: '2000-настоящее время',
                  icon: 'Shield',
                },
                {
                  name: 'Юрген Клопп',
                  team: 'Боруссия Дортмунд, Ливерпуль',
                  achievements: 'Лига Чемпионов, революция геген-прессинга',
                  years: '2001-настоящее время',
                  icon: 'Zap',
                },
                {
                  name: 'Арсен Венгер',
                  team: 'Арсенал',
                  achievements: '3 чемпионства АПЛ, сезон без поражений',
                  years: '1996-2018',
                  icon: 'Sparkles',
                },
              ].map((coach, index) => (
                <Card
                  key={index}
                  className="hover:border-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-secondary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-secondary/20 p-3 rounded-lg">
                        <Icon name={coach.icon as any} size={32} className="text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{coach.name}</h3>
                        <p className="text-sm text-muted-foreground">{coach.years}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-primary mb-2">{coach.team}</p>
                    <p className="text-muted-foreground">{coach.achievements}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="ronaldo" className="min-h-screen py-20 bg-gradient-to-br from-accent/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-6xl font-bold mb-4 flex items-center justify-center gap-3">
                <Icon name="Star" size={56} className="text-accent" />
                КРИШТИАНУ РОНАЛДУ
              </h2>
              <p className="text-2xl text-muted-foreground">Живая легенда футбола</p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-accent/30 bg-card/50 backdrop-blur-sm mb-8">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">Достижения</h3>
                      <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-2">
                          <Icon name="Trophy" size={24} className="text-accent mt-1 flex-shrink-0" />
                          <span>5 раз обладатель Золотого мяча</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Award" size={24} className="text-accent mt-1 flex-shrink-0" />
                          <span>5 побед в Лиге Чемпионов</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Star" size={24} className="text-accent mt-1 flex-shrink-0" />
                          <span>Рекордсмен Лиги Чемпионов по голам (140+)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Target" size={24} className="text-accent mt-1 flex-shrink-0" />
                          <span>890+ голов за карьеру</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Flag" size={24} className="text-accent mt-1 flex-shrink-0" />
                          <span>Победитель Евро 2016 с сборной Португалии</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-4">Статистика</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { value: '890+', label: 'Голов' },
                          { value: '250+', label: 'Ассистов' },
                          { value: '35+', label: 'Трофеев' },
                          { value: '1200+', label: 'Матчей' },
                        ].map((stat, index) => (
                          <div key={index} className="text-center p-4 bg-accent/10 rounded-lg">
                            <div className="text-4xl font-bold text-accent mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-6">Лучшие голы Роналду</h3>
                <div className="aspect-video max-w-4xl mx-auto bg-muted rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/wn6vLF_q7oE"
                    title="Cristiano Ronaldo - Best Goals"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-accent/5 to-primary/5">
                <CardContent className="p-6">
                  <blockquote className="text-center">
                    <p className="text-2xl italic mb-4">
                      "Талант — это дар, но характер — это выбор. Я выбрал быть лучшим."
                    </p>
                    <footer className="text-muted-foreground">— Криштиану Роналду</footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="goals" className="min-h-screen py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                <Icon name="Target" size={48} className="text-primary" />
                ЛУЧШИЕ ГОЛЫ В ИСТОРИИ
              </h2>
              <p className="text-xl text-muted-foreground">Моменты, которые изменили футбол</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Топ 50 голов 21 века',
                  videoId: 'aS71DhsJsrM',
                  description: 'Невероятные моменты последних 20 лет',
                },
                {
                  title: 'Гол столетия - Диего Марадона',
                  videoId: 'HeOeWh4hQPk',
                  description: 'Легендарный сольный проход против Англии 1986',
                },
                {
                  title: 'Удар Зидана в финале ЛЧ 2002',
                  videoId: 'E3BLrgvgHnE',
                  description: 'Один из самых красивых ударов с лета',
                },
                {
                  title: 'Гол Месси в Кубке Короля',
                  videoId: 'NwsFYTbelRw',
                  description: 'Невероятный сольный проход через всю команду',
                },
              ].map((video, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:border-primary transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                      <p className="text-muted-foreground text-sm">{video.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen py-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                <Icon name="Mail" size={48} className="text-accent" />
                ПРИСОЕДИНЯЙТЕСЬ К НАМ
              </h2>
              <p className="text-xl text-muted-foreground">Станьте частью футбольного сообщества</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-primary/30">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      { icon: 'Users', title: 'Сообщество', text: '1M+ болельщиков' },
                      { icon: 'Globe', title: 'Глобальность', text: '150+ стран' },
                      { icon: 'Zap', title: 'Новости', text: 'Ежедневно' },
                    ].map((feature, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Icon name={feature.icon as any} size={32} className="text-primary" />
                        </div>
                        <h4 className="font-bold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Ваш email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                      placeholder="Расскажите нам о вашей любви к футболу..."
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                    <Button size="lg" className="w-full">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить
                    </Button>
                  </div>

                  <div className="flex justify-center gap-4 mt-8">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Twitter" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Youtube" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Trophy" size={24} className="text-primary" />
            <span className="text-xl font-bold">ФУТБОЛ</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Футбольный портал. Создано с любовью к самой красивой игре.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
