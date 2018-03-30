const titles = new Map([
  ['c', 'Chief'],
  ['j', 'Junior'],
  ['d', 'Designer'],
  ['e', 'Editor'],
]);

const getTitle = (title) => {
  return title.split('')
    .map(t => titles.get(t))
    .join(' ');
}

module.exports = [
  {
    name: 'Megha Gutpa',
    image: 'https://4.bp.blogspot.com/-ucVgVUsdb-I/WrP2ZwARdeI/AAAAAAAAAVs/G9UWpUFYpBcL5AXbWiLFhsyZMfOGtiEuwCLcBGAs/s1600/megha-gupta.jpg',
    title: `${getTitle('ce')}, ${getTitle('d')}`
  },
  {
    name: 'Sudhanshu Vishnoi',
    image: 'https://2.bp.blogspot.com/-JuznALR_RDA/Wr5CnL6LB0I/AAAAAAAAAXQ/aVvkLVPxHBIlNcJqRLIAesmZIziIaCWWgCLcBGAs/s1600/sudhanshu-vishnoi.jpg',
    title: getTitle('ce'),
  },
  {
    name: 'Jyoti Joshi',
    image: 'https://3.bp.blogspot.com/-9LG5RVrSHz4/WrP2USYAkMI/AAAAAAAAAVg/sgz9GQBxgYU2XeZVbRwecSCZt_QQWT_HwCLcBGAs/s1600/jyoti-joshi.jpg',
    title: getTitle('cd'),
  },
  {
    name: 'Lakshya Sethi',
    image: 'https://4.bp.blogspot.com/-TZdUTMORfqU/WrP2VtldNdI/AAAAAAAAAVk/12bnupfvfW0uEevRWlx4UoeeL6YUvE5VgCLcBGAs/s1600/lakshya-sethi.jpg',
    title: getTitle('ce'),
  },
  {
    name: 'Ajay Jajoo',
    image: 'https://4.bp.blogspot.com/-rIjGJMa8DkA/WrP2UbR3LKI/AAAAAAAAAVc/DtgUsTb5eV0pVjJTxY-B1az91tpkLgKwwCLcBGAs/s1600/ajay-jajoo.jpg',
    title: getTitle('ce'),
  },
  {
    name: 'Jatin Rohilla',
    image: 'https://4.bp.blogspot.com/-6KqQSc9_fXw/WrP2Qo94DCI/AAAAAAAAAVU/bpRNej0R6lALqsh44ptifaPF5Ong0X80wCLcBGAs/s1600/jatin-rohilla.jpg',
    title: getTitle('je'),
  },
  {
    name: 'Shreshth Saxena',
    image: 'https://1.bp.blogspot.com/-mIOd8qhB3eQ/Wr5Gs9Kxt5I/AAAAAAAAAXw/JxxwILKGbHcENY1umkTu5OX2Gsp0S8HHQCLcBGAs/s1600/shreshth-saxena.jpg',
    title: getTitle('jd'),
  },
  {
    name: 'Ashita Diwan',
    image: 'https://2.bp.blogspot.com/-_vUwr5sSnUU/WrP2RCwV0yI/AAAAAAAAAVY/2vSlfHwB2uoiI9s0xV9h4Uts2pcXTQGNgCLcBGAs/s1600/ashita-diwan.jpg',
    title: getTitle('je'),
  },
  {
    name: 'Vipin Kumar',
    image: 'https://4.bp.blogspot.com/-f6NWnusm2mU/WrP2Y7dxGGI/AAAAAAAAAVo/dtiTqummVi4EXB2L5oy9bO3xkEH5ur2oQCLcBGAs/s1600/vipin-kumar.jpg',
    title: getTitle('jd'),
  },
];
