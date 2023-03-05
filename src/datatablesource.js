export const userColumns = [
  { field: "id", headerName: "Mã", width: 10 },
  {
    field: "user",
    headerName: "Tên khách hàng",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "sdt",
    headerName: "Số điện thoại",
    width: 130,
  },

  {
    field: "address",
    headerName: "Địa chỉ",
    width: 170,
  },

  {
    field: "time",
    headerName: "Thời gian đặt",
    width: 160,
  },

  {
    field: "status",
    headerName: "Trạng thái",
    width: 90,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "小 明 先 生",
    img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/273175312_1721414928250795_1946462547531562390_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CyXQJ1XSdvgAX8wi6-I&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBY6SKcNDfTF6XQkrhouyIirj3yArY8WYnulNmzpuz-yg&oe=6406EDD3",
    sdt: "0966932267",
    address: "胡 志 明 市",
    status: "active",
    time: "29-02-2023 23:00",
  },
  {
    id: 2,
    username: "Bruno Fernandes",
    img: "https://cdn-img.thethao247.vn/storage/files/andd/2021/04/22/bruno-fernandes-1619058292.jpg",
    sdt: "0966932267",
    address: "Manchester,England",
    status: "active",
    time: "30-02-2023 15:00",
  },
  {
    id: 3,
    username: "Casemiro",
    img: "https://i.guim.co.uk/img/media/7947a424a20ad696d5567b6c8b6c0e3c73cd7c3f/0_247_5067_3040/master/5067.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c945e829e5655b8084ad42ec6ab9c545",
    sdt: "0123456677",
    address: "Manchester,England",
    status: "pending",
    time: "31-02-2023 21:00",
  },
  {
    id: 4,
    username: "Lisandro Martinez",
    img: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5b612eca83540f27/62e26c3888ccd83f7530526e/Lisandro_Martinez_Manchester_United_(1)_copy.jpg",
    sdt: "0123412123",
    address: "Manchester,England",
    status: "active",
    time: "31-04-2023 21:30",
  },
  {
    id: 5,
    username: "Marcus Rashford",
    img: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-01/GettyImages-1454058933_1.jpg?itok=Hh7XuUjZ",
    sdt: "0988786886",
    address: "Manchester,England",
    status: "active",
    time: "31-06-2023 21:30",
  },
  {
    id: 6,
    username: "Jadon Sancho",
    img: "https://static.bongda24h.vn/medias/original/2022/06/06/tieu-su-jadon-sancho_0606141633.jpg",
    sdt: "0396628420",
    address: "Manchester,England",
    status: "pending",
    time: "31-02-2023 21:00",
  },
  {
    id: 8,
    username: "Antony",
    img: "https://static.bongda24h.vn/medias/original/2023/01/12/2-1201171050.png",
    sdt: "0102312433",
    address: "Manchester,England",
    status: "passive",
    time: "31-02-2023 21:00",
  },
  {
    id: 9,
    username: "Raphael Varane",
    img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/30/1099516/Varane-Ma-Utd.jpg",
    sdt: "0123423453",
    address: "Manchester,England",
    status: "active",
    time: "31-02-2023 12:00",
  },
  {
    id: 10,
    username: "Luke Shaw",
    img: "https://znews-photo.zingcdn.me/w660/Uploaded/sotnzt/2023_01_18/GettyImages_1246225488_1_1.jpg",
    sdt: "0123423453",
    address: "Manchester,England",
    status: "passive",
    time: "12-03-2023 12:00",
  },
  {
    id: 11,
    username: "David de Gea",
    img: "https://photo-cms-plo.epicdn.me/w850/Uploaded/2023/yqjvzdjwp/2023_02_13/manchester-united-de-gea-3769.jpeg",
    sdt: "0292342389",
    address: "Manchester,England",
    status: "active",
    time: "11-03-2023 12:00",
  },
  {
    id: 12,
    username: "Diogo Dalot",
    img: "https://znews-photo.zingcdn.me/w660/Uploaded/mfnuy/2022_09_06/2022_09_04T172925Z_2036195437_UP1EI941CKZO3_RTRMADP_3_SOCCER_ENGLAND_MUN_ARS_REPORT_1.JPG",
    sdt: "0123423453",
    address: "Manchester,England",
    status: "pending",
    time: "13-03-2023 12:00",
  },
  {
    id: 13,
    username: "Marcel Sabitzer",
    img: "https://i2-prod.manchestereveningnews.co.uk/sport/article26210304.ece/ALTERNATES/s615/0_GettyImages-1246978963.jpg",
    sdt: "0123423453",
    address: "Manchester,England",
    status: "active",
    time: "14-04-2023 12:00",
  },
  {
    id: 14,
    username: "Neymar JR",
    img: "https://cdn-img.thethao247.vn/origin_768x0/storage/files/tranvutung/2023/03/02/tin-chuyen-nhuong-2-3-neymar-roi-psg-den-ben-do-vi-dai-real-chia-tay-benzema-253614-054719.jpg",
    sdt: "0123423453",
    address: "Manchester,England",
    status: "active",
    time: "15-11-2023 12:00",
  },
];
