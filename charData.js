// ==========================================
// 忘却前夜 キャラクターデータベースマスタ (43体完全版)
// ==========================================
const CHARACTER_MASTER = [
    {
        name: "ラモンナ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "環行・ラモンナ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "オジール",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ロータン",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ドール",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ニムフィーア",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ナウティラ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "パンディア",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "アルバ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "カレン",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "リリー",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "「24」",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ライカ―",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ハムリン",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "シレスト",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "カエクス",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "オレッタ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ファロス",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "サンガー",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ゴリアテ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "トゥルー",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "マーフィー",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ミリアム",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "レーア",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ユウハシュ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ヘロット",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "アグリッパ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "アイギス",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ファイント",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ソレール",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "サルバドル",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "タイス",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "血ノ鎖・ヘロット",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "沙耶",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "リッツ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ティンクト",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ウインクル",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ジェンキン",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "エリカ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "カーシア",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "standard",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ダフォダイル",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "ワンダ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    },
    {
        name: "オルラ",
        baseAtk: 120, baseHp: 1500, baseDef: 80, type: "limited",
        cards: [
            { name: "攻撃", effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] },
            { name: "防御", effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }] }
        ]
    }
];
