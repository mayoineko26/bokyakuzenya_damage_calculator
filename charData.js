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
              description: "ループ効果は初期値バフを手動で100%に変更してください",
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
              description: "1凸効果はカード説明に反映されているので、倍率にすでに含んでいます（適切かは調査が必要）",
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
              description: "極限解放の効果は倍率に含めています（適切かは調査が必要）",
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
            },
            { name: "傲慢の刃",
              description: "1凸効果は初期値バフに20％を入れてください",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "恣意の波",
              description: "2凸効果は初期値バフに20％を入れてください、力の獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [1.5, 1.8, 2.1, 2.4, 2.7, 3] }]
            },
            { name: "混沌の獣",
              description: "3凸効果は最終効果に足してください（攻撃1回ごとの最終効果の上昇はクリティカル率×0.1を切り上げた％になります）",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [100, 120, 140, 160, 180, 200] }]
            },
            { name: "星が終わるまで（極限解放）",
              description: "3凸効果は最終効果に足してください（攻撃1回ごとの最終効果の上昇はクリティカル率×0.1を切り上げた％になります）",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [100, 120, 140, 160, 180, 200] }]
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
            },
            { name: "外界手術",
              description: "1凸効果はカード説明に反映されているので、倍率にすでに含んでいます（適切かは調査が必要）",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }],
              awakenOverrides: {
                    1: {
                        effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [12.5, 15, 17.5, 20, 22.5, 25] }]
                    }
                }
            },
            { name: "等価交換",
              description: "2凸効果はカード説明に反映されているので、倍率にすでに含んでいます（適切かは調査が必要）",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }],
              awakenOverrides: {
                    2: {
                        effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [37.5, 45, 52.5, 60, 67.5, 75] }]
                    }
                }
            },
            { name: "理性、心理と現実",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] }]
            },
            { name: "心智分析（極限解放）",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] }]
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
            },
            { name: "夜の波",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
            },
            { name: "弔いの鐘の音",
              effects: [{ type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
            },
            { name: "自我の葬儀",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] }]
            },
            { name: "永久の深海葬儀（極限解放）",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] }]
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
            },
            { name: "高温注意",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "短期記憶",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [12.5, 15, 17.5, 20, 22.5, 25] }]
            },
            { name: "準備完了",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [80, 96, 112, 128, 144, 160] }]
            },
            { name: "エンジン始動！（極限解放）",
              description: "3凸効果は初期値バフに記入してください、極限解放効果によるシールドの増加は対応していません",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [80, 96, 112, 128, 144, 160] }]
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
            },
            { name: "狂気を操る鞭",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [12, 14.4, 16.8, 19.2, 21.6, 24] }]
            },
            { name: "灼蝋の欲望",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [5, 6, 7, 8, 9, 10] }]
            },
            { name: "蜂蜜色の幻想惨劇",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [45, 54, 63, 72, 81, 90] }]
            },
            { name: "苦難は蜜の味（極限解放）",
              description: "3凸効果は初期値バフに記入してください、極限解放効果によるシールドの増加は対応していません",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [45, 54, 63, 72, 81, 90] }]
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
            },
            { name: "戦闘体勢",
              description: "1凸効果は初期値への加算？3凸効果は初期値バフ",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [5, 6, 7, 8, 9, 10] }]
            },
            { name: "心眼の刃",
              description: "シールドボーナスは初期値への加算に記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 60, 70, 80, 90, 100] }]
            },
            { name: "無限の正義",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] }]
            },
            { name: "正義と心理が共にある（極限解放）",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] }]
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
            },
            { name: "ガマシチュー",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "静観",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "ごゆっくり！",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] }]
            },
            { name: "豪華な食事（極限解放）",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] }]
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
            },
            { name: "返しの一撃",
              description: "忍耐による基礎ダメージの上昇は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [100, 120, 140, 160, 180, 200] }]
            },
            { name: "黒沼禁域",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "泥に咲く不滅の花",
              description: "忍耐による基礎シールドの上昇は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
            },
            { name: "願いを聞き入れる（極限解放）",
              description: "忍耐による基礎シールドの上昇は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
            }
        ]
    },
    {
        name: "「24」",
        baseAtk: 210, baseHp: 165, baseDef: 95, type: "limited",
        cards: [
            { name: "攻撃",
              description: "躁狂人格効果は初期値バフに記入してください（100%もしくは300%）（間違っているかも）",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              description: "抑鬱人格効果は初期値バフに記入してください（100%もしくは300%）（間違っているかも）",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "異種共生",
              description: "力の獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [2, 2.4, 2.8, 3.2, 3.6, 4] }]
            },
            { name: "乱れ切り",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "歪んだ死体の宴",
              description: "界域ごと＋人格ごとに別のバフがあるため、適宜数値を変更してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: [200, 220, 240, 260, 280, 300], tentacleBonus: 0, skills: [50, 60, 70, 80, 90, 100] }]
            },
            { name: "異形の解剖（極限解放）",
              description: "界域ごと＋人格ごとに別のバフがあるため、適宜数値を変更してください",
              effects: [{ type: "damage", stat: "atk", hits: 2, powerBonus: [200, 220, 240, 260, 280, 300], tentacleBonus: 0, skills: [50, 60, 70, 80, 90, 100] }]
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
            },
            { name: "思わぬ収穫",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "決戦の瞬間",
              description: "幸運のコートの効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] }]
            },
            { name: "オールイン",
              description: "幸運のコートの効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [60, 72, 84, 96, 108, 120] }]
            },
            { name: "Jackpot",
              description: "幸運のコートの効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [60, 72, 84, 96, 108, 120] }]
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
            },
            { name: "魂の序曲",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [60, 72, 84, 96, 108, 120] }]
            },
            { name: "原初の奏響",
              description: "ダメージ回数の増加は手動で入力してください",
              effects: [{ type: "damage", stat: "atk", hits: 2, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] }],
              awakenOverrides: {
                    3: {
                        effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] }]
                    }
                }
            },
            { name: "終末の奏鳴曲（極限解放）",
              description: "ダメージ回数の増加は手動で入力してください（極限解放の効果による増加分も含む）",
              effects: [{ type: "damage", stat: "atk", hits: 2, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] }],
              awakenOverrides: {
                    3: {
                        effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] }]
                    }
                }
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
            },
            { name: "純白の夢",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "other1", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "永遠の幻影",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "tentacle", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 50, 50, 50, 50, 50] },
                        { type: "other1", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
            },
            { name: "不死の極楽鳥",
              description: "純白の目印は初期値への加算に記入してください",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [45, 54, 63, 72, 81, 90] }]
            },
            { name: "女神の守り（極限解放）",
              description: "純白の目印は初期値への加算に記入してください",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [45, 54, 63, 72, 81, 90] }]
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
            },
            { name: "変身する体",
              effects: [{ type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [8, 9.6, 11.2, 12.8, 14.4, 16] }]
            },
            { name: "逆鱗の守り",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [8, 9.6, 11.2, 12.8, 14.4, 16] }]
            },
            { name: "破砕の沈戟",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: [80, 84, 88, 92, 96, 100], skills: [30, 36, 42, 48, 54, 60] }]
            },
            { name: "異端の継承",
              description: "力の獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [3, 3.6, 4.2, 4.8, 5.4, 6] }]
            },
            { name: "不屈の意志",
              description: "力の獲得量はその他バフ・デバフ１から計算できます、極限解放の効果は基礎値バフに記入してください",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [3, 3.6, 4.2, 4.8, 5.4, 6] }]
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
            },
            { name: "自己増殖",
              effects: [{ type: "tentacle", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [70, 76, 82, 88, 94, 100] }]
            },
            { name: "腺体分裂",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "仲間の力",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [2, 2.4, 2.8, 3.2, 3.6, 4] }]
            },
            { name: "賑やかな海（メインダメージ）",
              description: "メインダメージのみの計算、追加ダメージは賑やかな海（追加ダメージ）を選択して計算してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [100, 120, 140, 160, 180, 200] }]
            },
            { name: "賑やかな海（追加ダメージ）",
              description: "追加ダメージ用、攻撃回数は手動入力",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "クラゲ集合！（極限解放、メインダメージ）",
              description: "メインダメージのみの計算、追加ダメージは賑やかな海（追加ダメージ）を選択して計算してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [100, 120, 140, 160, 180, 200] }]
            },
            { name: "クラゲ集合！（極限解放、追加ダメージ）",
              description: "追加ダメージ用、攻撃回数は手動入力",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
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
            },
            { name: "崩壊の執念",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [2.5, 3, 3.5, 4, 4.5, 5] }]
            },
            { name: "狂熱の海",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: [150, 160, 170, 180, 190, 200], skills: [40, 48, 56, 64, 72, 80] }]
            },
            { name: "深淵の暗流",
              description: "触腕ダメージの獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [2.5, 3, 3.5, 4, 4.5, 5] }]
            },
            { name: "失われた古都",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
            },
            { name: "迷航の光（極限解放）",
              description: "3凸効果は初期値バフに記入してください、極限解放効果は基礎値バフに記入してください（150％）",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
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
            },
            { name: "美の憐れみ",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "閉鎖空間での制作",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [12.5, 15, 17.5, 20, 22.5, 25] }]
            },
            { name: "失われた芸術",
              description: "シールドボーナスは初期値への加算に入力してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] },
                        { type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
            },
            { name: "珊瑚海の誓い（極限解放）",
              description: "シールドボーナスは初期値への加算に入力してください",
              effects: [{ type: "damage", stat: "atk", hits: 2, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] },
                        { type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
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
            },
            { name: "斬首一閃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: [350, 380, 410, 440, 470, 500], tentacleBonus: 0, skills: [45, 54, 63, 72, 81, 90] }]
            },
            { name: "力こそ正義",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [2, 2.4, 2.8, 3.2, 3.6, 4] }]
            },
            { name: "深海の力",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [4, 4.8, 5.6, 6.4, 7.2, 8] }]
            },
            { name: "巨人の腕力",
              description: "極限解放の効果は初期値バフに記載してください（200％）",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [4, 4.8, 5.6, 6.4, 7.2, 8] }]
            },
            { name: "巨刃の威",
              description: "派生カードのため正確な倍率は未調査、スキルレベルは鮮血の鎖と同じものに設定してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }],
              awakenOverrides: {
                    2: {
                        effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 200, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
                    }
                }
            }
        ]
    },
    {
        name: "トゥルー",
        baseAtk: 190, baseHp: 170, baseDef: 150, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }],
              awakenOverrides: {
                    1: {
                        effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 100, skills: [10, 12, 14, 16, 18, 20] }]
                    }
                }
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "不朽の威厳",
              effects: [{ type: "tentacle", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 55, 60, 65, 70, 75] }]
            },
            { name: "深淵の号令",
              description: "余波効果の触腕ダメージの獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "tentacle", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [75, 90, 105, 120, 135, 150] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [1, 1.2, 1.4, 1.6, 1.8, 2] }]
            },
            { name: "ルルイエ再臨",
              description: "触腕ダメージの獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "tentacle", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [75, 90, 105, 120, 135, 150] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [2.5, 3, 3.5, 4, 4.5, 5] }]
            },
            { name: "星辰正しき刻",
              description: "2凸効果による触腕ダメージの獲得は対応していません",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [5, 6, 7, 8, 9, 10] }]
            },
            { name: "約束の日",
              description: "2凸・極限効果による触腕ダメージの獲得は対応していません",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [5, 6, 7, 8, 9, 10] }]
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
            },
            { name: "造られしもの",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [5, 6, 7, 8, 9, 10] }]
            },
            { name: "ルルイエの逆流",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] }]
            },
            { name: "聖女創造",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "ルルイエ再臨",
              description: "1凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] },
                        { type: "tentacle", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 55, 60, 65, 70, 75] }]
            },
            { name: "自由の誓い",
              description: "1凸効果は初期値バフに記入してください、極限解放効果はその他枠？",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] },
                        { type: "tentacle", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 55, 60, 65, 70, 75] }]
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
            },
            { name: "信仰の岐路",
              description: "派生カードのため倍率は不正確かもしれません",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [2, 2.4, 2.8, 3.2, 3.6, 4] }]
            },
            { name: "至高の生贄",
              description: "力の獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [2.5, 3, 3.5, 4, 4.5, 5] }]
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
            },
            { name: "満たされぬ痛み",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "苦痛と歓喜",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] }]
            },
            { name: "林檎磨きの抱擁",
              description: "力の獲得量はその他バフ・デバフ１から計算できます、3凸効果は初期値バフに記入してください",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [8, 9.6, 11.2, 12.8, 14.4, 16] }]
            },
            { name: "蒼白の血吻（極限解放）",
              description: "力の獲得量はその他バフ・デバフ１から計算できます、3凸効果は初期値バフに記入してください",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [8, 9.6, 11.2, 12.8, 14.4, 16] }]
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
            },
            { name: "沸け、血よ！",
              effects: [{ type: "damage", stat: "atk", hits: 2, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] }],
              awakenOverrides: {
                    2: {
                        effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] }]
                    }
                }
            },
            { name: "叫べ、血よ！",
              description: "1凸効果は初期値バフに記入してください（100％）",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [1, 1.2, 1.4, 1.6, 1.8, 2] }]
            },
            { name: "血と砂の賛歌",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 555, tentacleBonus: 0, skills: [100, 120, 140, 160, 180, 200] }]
            },
            { name: "血の贈り物（極限解放）",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 555, tentacleBonus: 0, skills: [100, 120, 140, 160, 180, 200] }]
            }
        ]
    },
    {
        name: "ヘロット",
        baseAtk: 170, baseHp: 175, baseDef: 125, type: "standard",
        cards: [
            { name: "攻撃",
              description: "極限解放の効果はその他枠（100％）です",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "鎖を断つ一撃",
              description: "1,3凸効果は初期値バフに記入してください（カード効果については要検証）、極限解放の効果はその他枠です（100％）",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [75, 90, 105, 120, 135, 150] }]
            },
            { name: "長き憎しみ",
              description: "2凸効果は初期値バフに記入してください、極限解放の効果はその他枠（100％）です",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] }]
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
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "耐え難い施し",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "蒼白の旋回",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "蒼白の庇護",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "迷宮の主（極限解放）",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
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
            },
            { name: "小さな希望",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "石の分解",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] }]
            },
            { name: "永遠の瞳",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [60, 72, 84, 96, 108, 120] }]
            },
            { name: "永遠を超越する凝視（極限解放）",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [60, 72, 84, 96, 108, 120] }]
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
            },
            { name: "無限の星空",
              effects: [{ type: "other1", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [5, 6, 7, 8, 9, 10] }]
            },
            { name: "養分吸収",
              description: "力の減少はその他バフ・デバフ１から、深紅の炉蓄積はその他バフ・デバフ２から計算できます",
              effects: [{ type: "other1", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] },
                        { type: "other2", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "幼芽萌生",
              description: "深紅の炉消費の最大値はその他バフ・デバフ１から計算できます",
              effects: [{ type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] },
                        { type: "other1", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 60, 70, 80, 90, 100] }]
            },
            { name: "星のゆりかご",
              description: "力の減少はその他バフ・デバフ１から計算できます、3凸効果は初期値バフに記入してください",
              effects: [{ type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "other1", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "繭を破って生まれた新芽（極限解放）",
              description: "力の減少はその他バフ・デバフ１から計算できます、3凸効果、極限解放の効果は初期値バフに記入してください",
              effects: [{ type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "other1", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
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
            },
            { name: "薔薇の美",
              description: "1凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [9, 10.8, 11.2, 12.8, 14.4, 16] }]
            },
            { name: "珠玉の卵",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [1, 1.2, 1.4, 1.6, 1.8, 2] }]
            },
            { name: "権欲の輪舞",
              description: "捕食効果は基礎効果の上昇と攻撃回数に記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 5, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] }]
            },
            { name: "無限の薔薇の欲望（極限解放）",
              description: "捕食効果は基礎効果の上昇と攻撃回数に記入してください、力の獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "damage", stat: "atk", hits: 5, powerBonus: 100, tentacleBonus: 0, skills: [25, 30, 35, 40, 45, 50] },
                        { type: "other1", stat: "atk", hits: 5, powerBonus: 100, tentacleBonus: 0, skills: [4, 4, 4, 4, 4, 4] }]
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
            },
            { name: "祝福の骨肉",
              description: "1凸効果は初期値バフに記入してください",
              effects: [{ type: "other1", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "苦痛の解消",
              description: "3凸効果は浄化効果は初期値バフに記入してください、献身による深紅の炉の獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "other1", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "創造主の庇護",
              description: "1凸効果は初期値バフに記入してください、捕食効果による深紅の炉の獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "other1", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "創生の祭典（極限解放）",
              description: "1凸効果は初期値バフに記入してください、捕食効果による深紅の炉の獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "other1", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
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
            },
            { name: "古の愛撫",
              description: "1凸効果は初期値バフに記入してください",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [2.5, 3, 3.5, 4, 4.5, 5] }]
            },
            { name: "豊穣の儀",
              description: "1凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [60, 72, 84, 96, 108, 120] }]
            },
            { name: "聖骸の伝承（極限解放）",
              description: "1凸効果は初期値バフに記入してください、力の獲得量はその他バフ・デバフ１から計算できます",
              effects: [{ type: "damage", stat: "atk", hits: 5, powerBonus: 100, tentacleBonus: 0, skills: [60, 72, 84, 96, 108, 120] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [200, 200, 200, 200, 200, 200] }]
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
            },
            { name: "憎悪の奔流",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "鮮血の鎖",
              effects: [{ type: "damage", stat: "atk", hits: 2, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "血に狂う鉄球",
              description: "派生カードのため正確な倍率は未調査、スキルレベルは鮮血の鎖と同じものに設定してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [180, 216, 252, 288, 324, 360] }]
            },
            { name: "呪縛の鎖",
              description: "殺意によるダメージ増加は最終効果に記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
            },
            { name: "束縛されし怨念（極限解放）",
              description: "殺意によるダメージ増加は最終効果に記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] }]
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
            },
            { name: "血脂爛漫",
              description: "1凸効果は初期値バフに記入してください、3凸効果は固定値の加算に記入してください（要検証）",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 60, 70, 80, 90, 100] }]
            },
            { name: "沙耶の唄",
              description: "1凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 60, 70, 80, 90, 100] }]
            },
            { name: "あなただけの楽園（極限解放）",
              description: "1凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 60, 70, 80, 90, 100] }]
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
            },
            { name: "誘蛾の炎",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "緑炎",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "腐敗の緑炎",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 2, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "死滅の緑炎",
              description: "3凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "死告の舞い",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "死兆到来（極限解放）",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
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
            },
            { name: "鎮魂歌",
              effects: [{ type: "other1", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "響き渡る音",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [6, 7.2, 8.4, 9.6, 10.8, 12] }]
            },
            { name: "星の極光",
              description: "3凸効果、跳躍効果は初期値バフに記入してください（要検証）",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [6, 7.2, 8.4, 9.6, 10.8, 12] }]
            },
            { name: "宇宙を貫く音律",
              description: "3凸効果、跳躍効果は初期値バフに記入してください（要検証）",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [6, 7.2, 8.4, 9.6, 10.8, 12] }]
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
            },
            { name: "エネルギーレイ",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "精神再建",
              description: "追加シールドは精神再建（追加シールド）から計算してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "精神再建（追加シールド）",
              description: "2凸効果は倍率に含めています（初期値バフとは別枠？要検証）",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [4, 4.8, 5.6, 6.4, 7.2, 8] }],
              awakenOverrides: {
                    2: {
                        effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [6, 7.2, 8.4, 9.6, 10.8, 12] }]
                    }
                }
            },
            { name: "無形の移動",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] }]
            },
            { name: "時空転送（極限解放）",
              description: "極限効果による毎ターンのシールド獲得量は時空転送（毎ターンの獲得量）から計算してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [35, 42, 49, 56, 63, 70] }]
            },
            { name: "時空転送（毎ターンの獲得量）",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 20, 20, 20, 20, 20] }]
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
            },
            { name: "鼠たちの突撃",
              description: "スキルレベルは鼠たちの集結と同じにしてください",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "ブラウン出撃",
              description: "3凸効果は初期値バフに記入してください、1,2凸効果は力に足してください（要検証）",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            }
        ]
    },
    {
        name: "エリカ",
        baseAtk: 180, baseHp: 185, baseDef: 180, type: "standard",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }],
              awakenOverrides: {
                    2: {
                        effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 200, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
                    }
                }
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }],
              awakenOverrides: {
                    1: {
                        effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 200, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
                    }
                }
            },
            { name: "変数の最適化",
              description: "力の獲得量はその他バフ・デバフ１から、警戒の獲得量はその他バフ・デバフ２から計算できます",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [4.5, 5.4, 6.3, 7.2, 8.1, 9] },
                        { type: "other2", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [1.5, 1.8, 2.1, 2.4, 2.7, 3] }]
            },
            { name: "機械武装",
              description: "力の獲得量はその他バフ・デバフ１から、警戒の獲得量はその他バフ・デバフ２から計算できます、3凸効果は初期値バフに記入してください",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [4.5, 5.4, 6.3, 7.2, 8.1, 9] },
                        { type: "other2", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [1.5, 1.8, 2.1, 2.4, 2.7, 3] }]
            },
            { name: "機能過負担",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [16, 19.2, 22.4, 25.6, 28.8, 32] },
                        { type: "shield", stat: "def", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [8, 9.6, 11.2, 12.8, 14.4, 16] }]
            },
            { name: "電磁爆撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
            },
            { name: "多重計算（極限解放）",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] }]
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
            },
            { name: "公演の序幕",
              effects: [{ type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "念動力操作",
              effects: [{ type: "damage", stat: "atk", hits: 2, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "マジックカーニバル",
              description: "力の獲得量はその他バフ・デバフ１から計算できます、3凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "笑いの宴（極限解放）",
              description: "力の獲得量はその他バフ・デバフ１から計算できます、3凸効果は初期値バフに記入してください",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [30, 36, 42, 48, 54, 60] },
                        { type: "other1", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
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
            },
            { name: "首切りの一撃",
              description: "1凸効果とカード効果は初期値バフに記入してください（要検証）",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [50, 60, 70, 80, 90, 100] }]
            },
            { name: "根源の海",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [60, 72, 84, 96, 108, 120] }]
            },
            { name: "千変万化・瘴",
              description: "派生カードなので倍率は要検証",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [70, 84, 98, 112, 126, 140] }]
            },
            { name: "千変万化・鏡",
              description: "派生カードなので倍率は要検証",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [100, 120, 140, 160, 180, 200] }]
            },
            { name: "千変万化・鎌",
              description: "派生カードなので倍率は要検証",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [280, 336, 392, 448, 504, 560] }]
            }
        ]
    },
    {
        name: "ワンダ",
        baseAtk: 110, baseHp: 175, baseDef: 205, type: "limited",
        cards: [
            { name: "攻撃",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }],
              awakenOverrides: {
                    2: {
                        effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] },
                                  { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [16, 16, 16, 16, 16, 16] }]
                    }
                }
            },
            { name: "防御",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "迷い人の守護",
              description: "力の減少はその他バフ・デバフ１から計算できます、1凸効果は初期値バフに記入してください",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [20, 24, 28, 32, 36, 40] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] },
                        { type: "other1", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [5, 6, 7, 8, 9, 10] }]
            },
            { name: "脊椎針の鎖",
              effects: [{ type: "damage", stat: "atk", hits: 3, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] }]
            },
            { name: "迷い人の守護",
              description: "跳躍で獲得するシールドは迷い人の守護（跳躍効果）から計算してください、3凸効果は初期値バフに記入してください（100％）",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [12, 14.4, 16.8, 19.2, 21.6, 24] }]
            },
            { name: "迷い人の守護（跳躍効果）",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [7.5, 9, 10.5, 12, 13.5, 15] }]
            },
            { name: "迷夢の導き（極限解放）",
              description: "跳躍で獲得するシールドは迷い人の守護（跳躍）から計算してください、3凸効果は初期値バフに記入してください（100％）",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [15, 18, 21, 24, 27, 30] },
                        { type: "poison", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [12, 14.4, 16.8, 19.2, 21.6, 24] }]
            }
        ]
    },
    {
        name: "オルラ",
        baseAtk: 120, baseHp: 115, baseDef: 105, type: "limited",
        cards: [
            { name: "攻撃",
              description: "3凸効果は初期値バフに記入してください（100％）",
              effects: [{ type: "damage", stat: "atk", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "防御",
              description: "3凸効果は初期値バフに記入してください（100％）",
              effects: [{ type: "shield", stat: "def", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [10, 12, 14, 16, 18, 20] }]
            },
            { name: "華やかな章",
              description: "1凸効果は初期値バフに記入してください",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] }]
            },
            { name: "墨染めの詩（極限解放）",
              description: "1凸効果は初期値バフに記入してください",
              effects: [{ type: "heal", stat: "con", hits: 1, powerBonus: 100, tentacleBonus: 0, skills: [40, 48, 56, 64, 72, 80] }]
            }
        ]
    }
];
