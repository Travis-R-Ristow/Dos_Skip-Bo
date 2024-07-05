# Skip-Bo Online | Dos 🃏 🎴

> We love the Skip-Bo game, this will be a game similar to that with additional features and rules, maybe call it Dos.

## Game Platform and Frameworks

> Web Based game, utilizing SSR/webSockets and basic css for animation.

**DB**: Mongo

**FEnd**: ?React? _I want to try something new_ _May be able to use static HTML / A Custom framework_

**BEnd**: Golang | Rust

### Mongo DB

> I'll need to save game states. We could save users for additional features; like: return to game, and points.

#### Game State 🎮 🕹️

```yaml
---
# Game State
    BoardStacks: CardStack[]
    Player0: {
        Hand: Card[]
        DiscardStacks: CardStack[]
        StockPile: {
            TopCard: Card
            CardsLeft: Number
        }
    }
    Player1|PlayerGuid: {...}
...
```

#### User 🙋🏼

```yaml
---
# User
Id: Guid[]
Points: Number
LastGameId: GameGuid
```

### FrontEnd

> Lets do someting crazy and custom.

#### Needs Solving/POC

-   Click and drag cards with template/board.
-   WebSocket structure.

### BackEnd

> Maybe use Golang. The server will need to manage multiple GameStates. The server will need to handle and authorize CardActions.

#### GameStates

> The server will need to manage multiple game states, each one holding their respective board and player states.

#### CardActions

> The server will hold the CardAction funtions. Each Action will need to be authorized based on is its current position and its target location.

### Data Flow

#### Move Card

[Auth]
POST | move-card (cardGuid, currentLocation, targetLocation)

## Rules
