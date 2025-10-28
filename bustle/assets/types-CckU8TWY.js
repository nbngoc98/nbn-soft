var i = ((n) => (
    (n.WEDDING = "wedding"),
    (n.BIRTHDAY = "birthday"),
    (n.BABY = "baby"),
    (n.NEW_HOUSE = "new_house"),
    (n.NEW_YEAR = "new_year"),
    (n.GRAND_OPENING = "grand_opening"),
    (n.REUNITE = "reunite"),
    (n.EVENT = "event"),
    n
  ))(i || {}),
  N = ((n) => ((n.BASIC = "basic"), (n.PRO = "pro"), (n.VIP = "vip"), n))(
    N || {}
  ),
  E = ((n) => (
    (n.CREATED = "created"),
    (n.PENDING_PAYMENT = "pending_payment"),
    (n.PAID = "paid"),
    (n.IN_PROGRESS = "in_progress"),
    (n.DELIVERED = "delivered"),
    (n.COMPLETED = "completed"),
    (n.CANCELED = "canceled"),
    (n.REFUNDED = "refunded"),
    n
  ))(E || {}),
  r = ((n) => (
    (n.WEDDING = "wedding"),
    (n.EVENT = "event"),
    (n.BIRTHDAY = "birthday"),
    (n.ANNIVERSARY = "anniversary"),
    n
  ))(r || {});
const R = {
    wedding: "Logo Cưới",
    birthday: "Logo Sinh Nhật",
    baby: "Logo Thôi Nôi",
    new_house: "Logo Tân Gia",
    new_year: "Logo Năm Mới",
    grand_opening: "Logo Khai Trương",
    reunite: "Logo Họp Lớp",
    event: "Logo Sự Kiện",
  },
  h = {
    commission_rate_bps: 500,
    min_commission_amount: 1e4,
    commission_unlock_days: 7,
    max_commission_per_order: 1e5,
    referral_bonus_amount: 5e4,
    min_order_amount_for_commission: 1e5,
  },
  _ = {
    COMMISSION_RATE_BPS: "commission_rate_bps",
    MIN_COMMISSION_AMOUNT: "min_commission_amount",
    COMMISSION_UNLOCK_DAYS: "commission_unlock_days",
    MAX_COMMISSION_PER_ORDER: "max_commission_per_order",
    REFERRAL_BONUS_AMOUNT: "referral_bonus_amount",
    MIN_ORDER_AMOUNT_FOR_COMMISSION: "min_order_amount_for_commission",
  },
  O = {
    [_.COMMISSION_RATE_BPS]: "Tỷ lệ hoa hồng (basis points, 100 = 1%)",
    [_.MIN_COMMISSION_AMOUNT]: "Số tiền hoa hồng tối thiểu (cents)",
    [_.COMMISSION_UNLOCK_DAYS]: "Số ngày chờ để mở khóa hoa hồng",
    [_.MAX_COMMISSION_PER_ORDER]: "Hoa hồng tối đa mỗi đơn hàng (cents)",
    [_.REFERRAL_BONUS_AMOUNT]: "Số tiền thưởng cho người giới thiệu (cents)",
    [_.MIN_ORDER_AMOUNT_FOR_COMMISSION]:
      "Giá trị đơn hàng tối thiểu để tính hoa hồng (cents)",
  };
var I = ((n) => (
    (n.PLANNED = "planned"),
    (n.UNPAID = "unpaid"),
    (n.PARTIAL = "partial"),
    (n.PAID = "paid"),
    (n.CANCELED = "canceled"),
    n
  ))(I || {}),
  c = ((n) => (
    (n.TODO = "todo"), (n.DONE = "done"), (n.ARCHIVED = "archived"), n
  ))(c || {});
const A = { BASIC: 10, PRO: 40, VIP: 500, ADMIN: -1 };
var a = ((n) => ((n.CASH = "cash"), (n.GOLD = "gold"), n))(a || {});
const M = { cash: "Tiền mặt", gold: "Vàng" },
  D = { cash: "💰", gold: "🥇" },
  g = (n, s = "cash") => {
    const o = typeof n == "string" ? parseInt(n) : n;
    return s === "cash"
      ? `${Math.round(o).toLocaleString("vi-VN")} VND`
      : `${o} chỉ vàng`;
  },
  t = (n = "cash") =>
    n === "cash" ? "Nhập số tiền (VND)" : "Nhập số chỉ vàng",
  S = (n = "cash") => (n === "cash" ? "VND" : "chỉ");
export {
  h as D,
  D as M,
  I as P,
  O as R,
  i as T,
  A as U,
  r as V,
  N as a,
  E as b,
  c,
  M as d,
  a as e,
  g as f,
  t as g,
  S as h,
  R as l,
};
