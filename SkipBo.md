# Skip-Bo Online | Dos 🃏 🎴

> We love the Skip-Bo game, this will be a game similar to that with additional features and rules, maybe call it Dos.

## Game Platform and Frameworks

> Web Based game, utilizing SSR/webSockets and basic css for animation.

**DB**: Mongo
**FEnd**: ?React? _I want to try something new_ _May be able to static HTML / A Custom framework_
**BEnd**: Golang | Rust

### Mongo DB

> Ill need to save game states. We could save users for additional features; like: return to game, and points.

#### Game State 🎮 🕹️

```json
{
    BoardStacks: CardStack[];
    Player0: {
        Hand: Card[];
        DiscardPiles: CardStack[];
        StockPile: {
            TopCard: Card;
            CardsLeft: Number;
        };
    },
    Player1|PlayerGuid: {...}
}

```

#### User 🙋🏼

```json
{
    Id: Guid;
    Points: Number;
    LastGameId: Guid;
    ...
}
```

### FrontEnd

> Lets do someting crazy and custom.

#### Needs Solving/POC

-   Click and drag cards look/Action
-   WebSocket structure.

### BackEnd

> Maybe use Golang. The server will need to manage multiple GameStates. The server will need to handle and authorize CardActions.

#### CardActions

> The server will hold the CardAction funtions. Each Action will need to be authorized based on is its current position and its target location.

## Rules
