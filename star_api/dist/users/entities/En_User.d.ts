export declare class En_User {
    id: number;
    token: string | null;
    account: string;
    password: string;
    name: string;
    lv: number;
    visualId: number;
    gender: number;
    introduction: string | null;
    coin: number;
    deleted: number;
    failed_attempts: number | null;
    last_attempt_time: Date | null;
    locked: number;
    lock_until: Date | null;
    enable: number;
    diamond: number;
    total_bet: number;
    max_bet_one_time: number;
    is_room_open: number | null;
    gold_box_count: number;
    is_roulette_open: number;
    roulette_count: number;
    is_lotto_open: number;
    multiplier: number;
    multiplier_expire_time: Date | null;
}
