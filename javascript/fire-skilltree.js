// name = {
//     nome: 'nome',
//     range: [
//         >>> range in squares
//     ],
//     damage: [
//         >>> damage in strings
//     ],
//     learningComponents: '',
//     duration: '',
//     uses: '',
//     toHit: '',
//     castingTime: '',
//     description: '',
//     price: 'xp required',
//     purchased: false or true,
//     upgrades: {
//         atribute: [level, price1, price2, price3...]
//     },
// }


class FireSkillTree {
    basicAttack = {
        nome: 'Ataque Básico',
        range: [
            5,
            6,
            7,
            8,
            9,
        ],
        damage: [
            '1d8',
            '2d8',
            '3d8',
            '4d8',
            '5d8',
        ],
        learningComponents: 'Nenhum',
        duration: 'Instantânea',
        uses: 'Infinito',
        toHit: '1d20',
        castingTime: '1 ação',
        description: 'O dominador lança uma chama sobre o inimigo até 7,5 metros, causando 1d8 + MF de dano. A cada 1,5 metros (1 quadrado)  além do limite de distância seu ataque dará metade do dano arredondado para baixo com limite mínimo de um de dano.',
        price: '0',
        purchased: false,
        upgrades: {
            damage: [0, 1700, 2000, 2300, 2600],
            range: [0, 1800, 2100, 2400, 2700],
        },
    }
    fireBall = {
        nome: 'Bola de Fogo',
        range: [
            7,
            8,
            9,
        ],
        damage: [
            '2d6',
            '3d6',
            '5d6',
            '7d6',
            '9d6',
        ],
        learningComponents: 'Nenhum',
        duration: 'Instantânea',
        uses: '3',
        toHit: '1d20',
        castingTime: '1 ação',
        description: 'Uma bola de fogo sairá de uma das mãos do dominador chegando até 10,5 metros, queimando o inimigo, causando 2d6 + MF de dano.',
        price: '600',
        purchased: false,
        upgrades: {
            damage: [0, 75, 150, 150, 150],
            range: [0, 150, 150],
        },
    }
    flamingKick = {
        nome: 'Chute Flamejante',
        range: [
            3,
            4,
            5,
        ],
        damage: [
            '1d4',
            '3d4',
            '5d4',
            '4d8',
            '6d8',
        ],
        learningComponents: 'Nenhum',
        duration: 'Instantânea',
        uses: '2',
        toHit: '1d20',
        castingTime: '1 ação bônus',
        description: 'Com uma ação bônus, o dobrador no meio de suas ações faz um chute lateral causando 1d4 + MF nas pessoas que estiverem em sua frente em até 4,5 metros.',
        price: '400',
        purchased: false,
        upgrades: {
            damage: [0, 100, 100, 150, 200],
            range: [0, 150, 150],
        },
    }
    canalization = {
        nome: 'Canalização',
        range: [
            8,
            9,
            10,
        ],
        damage: [
            '2d6 + 3d4 por ação adicional e base 4d6 + 2d4',
            '4d6 + 1d4 por ação adicional e base 6d6 + 4d4',
            '4d6 + 3d4 por ação adicional e base 4d6 + 3d4',
            '4d8 + 4d4 por ação adicional e base 6d8 + 4d4',
            '5d8 + 5d4 por ação adicional e base 5d8 + 5d4',
        ],
        learningComponents: 'Pergaminho ou aulas',
        duration: 'Instantânea',
        uses: '2',
        toHit: '1d20 + 3 + MF ou 1d20',
        castingTime: '2 ações (mínimo)',
        description: 'Canaliza a bola de fogo com as duas mãos, por meio de, inicialmente, duas ações, lançando uma bola de fogo com mais energia até 12 metros, causando 4d6 + 2d4 + MF em uma pessoa. A cada ação adicional que for utilizada, dará 2d6 + 3d4 por ação. Além disso, a partir da 3° ação utilizada, o dominador terá + 3 para acertar. Ataques recebidos durante a canalização a cancelam. É preciso ter visto o inimigo para utilizar este ataque.',
        price: '900',
        purchased: false,
        upgrades: {
            damage: [0, 175, 225, 150, 400],
            range: [0, 150, 150],
        },
    }
    
}