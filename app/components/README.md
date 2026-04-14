```markdown
## Обозначение компонентов

app/
components/
    ├── ui/           # Базовые универсальные UI-компоненты (ProductCard, CategoryCard, UiContainer и т.д.)
    ├── layout/       # Всё, что касается布局 (Header, Footer, Sidebar, Nav и т.д.)
    └── feature/      # Бизнес-логика и крупные секции (Hero, Menu, CategoryList и т.д.)
```


```html
<div class="container">
  <div class="шапка"></div>
  <div class="мэин"></div>
  <div class="футтер"></div>
</div>

```

```css
.container {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 60px;
  gap: 0px 0%;
  grid-auto-flow: row;
  grid-template-areas:
    "шапка"
    "мэин"
    "футтер";
}

.шапка { grid-area: шапка; }

.футтер { grid-area: футтер; }

.мэин {  
display: grid;
  grid-template-columns: 236px 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". .";
  grid-area: мэин;
}
```