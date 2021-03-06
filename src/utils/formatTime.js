export default function format(time) {
    let mls = time % 100;
    if (mls/10 < 1) mls = '0' + mls;
    let seg = time / 100 | 0;
    if (seg>59) seg = seg % 60;
    if (seg/10 < 1) seg = '0' + seg;
    let min = time / 6000 | 0;
    if (min/10 < 1) min = '0' + min;
    return `${min}:${seg}:${mls}`;
  }