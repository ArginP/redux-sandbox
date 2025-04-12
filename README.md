# Redux - Redux Toolkit - React-Redux - React RTK TS - React Query
## Sandbox project

## ```Source:```

https://www.youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3

https://github.com/gopinav/Redux-Toolkit-Tutorials

## [Deploy via GitHub Actions](https://arginp.github.io/redux-sandbox/) 

### Описание App:
- Кнопка Order Cake уменьшает количество Cake и IceCream на 1
  - (Слайс мороженного импортирует редюсер из слайса тортов, и добавляет его себе в качестве extraReducers)
    _"Акция закажи — торт получи мороженное в подарок"_
- Кнопка Restock Cake увеличивает количество Cake на 5 единиц
- Кнопка Order Ice Cream уменьшает количество IceCream на 1
- Кнопка Restock Ice Cream получает value из controlled input, и увеличивает число мороженных на указанное число
- ~~Axios получает JSON от jsonplaceholder~~
- API via RTK Query для получения данных от jsonplaceholder
  - Полученные данные выводятся на страницу
  - Есть обработка и вывод ошибок
  - Второй query с настраиваемыми параметрами фильтрации ответа от API
  - Третий query с мутацией для симуляции запроса с методом POST
