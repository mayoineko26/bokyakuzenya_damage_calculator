// ==========================================
// 忘却前夜 キャラクターデータベースマスタ
// base??? は恒常キャラならレベル80の、限定キャラならレベル70のときの値
// ==========================================
const CHARACTER_MASTER = [
    {
        name: "ラモンナ",
        baseAtk: 150, baseHp: 150, baseDef: 150, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "女王の剣",
              effects: [{ type: "damage", stat: "atk", hits: 2, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "攻勢演習",
              effects: [{ type: "other1", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [8, 9.6, 11.2, 12.8, 14.4, 16] }]
            }
        ]
    },
    {
        name: "環行・ラモンナ",
        baseAtk: 150, baseHp: 150, baseDef: 150, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              description: "ループ効果はその他バフ・デバフ１から計算できます",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] },
                        { type: "other1", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "運命の剣",
              description: "ループ効果は力ボーナスを手動で1000%に変更してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [75, 90, 105, 120, 135, 150] }]
            },
            { name: "超越の眼",
              description: "ループ効果は基礎値バフを手動で100%に変更してください",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [4, 4.8, 5.6, 6.4, 7.2, 8] }]
            },
        ]
    },
    {
        name: "オジール",
        baseAtk: 145, baseHp: 170, baseDef: 185, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              description: "1凸効果はカード説明に反映されているので、倍率にすでに含んでいます",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }],
              awakenOverrides: {
                    1: {
                        effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [12.5, 15, 17.5, 20, 22.5, 25] }]
                    }
                }
            },
            { name: "騎士の熱意",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [2.5, 3, 3.5, 4, 4.5, 5] }]
            },
            { name: "不定の壁",
              description: "効果回数は手動で変更してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [6, 7.2, 8.4, 9.6, 10.8, 12] }]
            },
            { name: "刺突の槍",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
            },
            { name: "七つの技、継承した美徳",
              description: "力の獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "献身の決意（極限解放）",
              description: "極限解放の効果は倍率に含めています",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 60, 70, 80, 90, 100] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            }
        ]
    },
    {
        name: "ロータン",
        baseAtk: 165, baseHp: 160, baseDef: 140, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ドール",
        baseAtk: 90, baseHp: 110, baseDef: 120, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ニムフィーア",
        baseAtk: 150, baseHp: 95, baseDef: 100, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ナウティラ",
        baseAtk: 115, baseHp: 190, baseDef: 200, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "パンディア",
        baseAtk: 175, baseHp: 150, baseDef: 155, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "アルバ",
        baseAtk: 160, baseHp: 150, baseDef: 175, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "カレン",
        baseAtk: 120, baseHp: 140, baseDef: 135, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "リリー",
        baseAtk: 130, baseHp: 180, baseDef: 180, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "「24」",
        baseAtk: 210, baseHp: 165, baseDef: 95, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ライカ―",
        baseAtk: 165, baseHp: 200, baseDef: 160, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ハムリン",
        baseAtk: 155, baseHp: 150, baseDef: 145, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "シレスト",
        baseAtk: 95, baseHp: 100, baseDef: 100, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "カエクス",
        baseAtk: 155, baseHp: 195, baseDef: 170, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "オレッタ",
        baseAtk: 130, baseHp: 120, baseDef: 115, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ファロス",
        baseAtk: 130, baseHp: 120, baseDef: 150, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "サンガー",
        baseAtk: 125, baseHp: 160, baseDef: 190, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ゴリアテ",
        baseAtk: 200, baseHp: 205, baseDef: 165, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "トゥルー",
        baseAtk: 190, baseHp: 170, baseDef: 150, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "マーフィー",
        baseAtk: 155, baseHp: 145, baseDef: 175, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ミリアム",
        baseAtk: 165, baseHp: 105, baseDef: 90, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "レーア",
        baseAtk: 90, baseHp: 90, baseDef: 90, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ユウハシュ",
        baseAtk: 170, baseHp: 180, baseDef: 150, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ヘロット",
        baseAtk: 170, baseHp: 175, baseDef: 125, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "アグリッパ",
        baseAtk: 140, baseHp: 165, baseDef: 170, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "アイギス",
        baseAtk: 150, baseHp: 125, baseDef: 135, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ファイント",
        baseAtk: 100, baseHp: 130, baseDef: 155, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ソレール",
        baseAtk: 205, baseHp: 145, baseDef: 105, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "サルバドル",
        baseAtk: 135, baseHp: 210, baseDef: 210, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "タイス",
        baseAtk: 150, baseHp: 155, baseDef: 140, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "血ノ鎖・ヘロット",
        baseAtk: 170, baseHp: 175, baseDef: 125, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "沙耶",
        baseAtk: 115, baseHp: 115, baseDef: 110, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "リッツ",
        baseAtk: 185, baseHp: 135, baseDef: 145, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ティンクト",
        baseAtk: 145, baseHp: 130, baseDef: 125, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ウインクル",
        baseAtk: 140, baseHp: 125, baseDef: 160, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ジェンキン",
        baseAtk: 175, baseHp: 125, baseDef: 130, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "エリカ",
        baseAtk: 180, baseHp: 185, baseDef: 180, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "カーシア",
        baseAtk: 140, baseHp: 135, baseDef: 120, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ダフォダイル",
        baseAtk: 195, baseHp: 155, baseDef: 145, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "ワンダ",
        baseAtk: 110, baseHp: 175, baseDef: 205, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "オルラ",
        baseAtk: 120, baseHp: 115, baseDef: 105, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    }
];
