// Nội dung trang chủ (bố cục theo DESIGN.md)

export const PROCESS = [
  { num: '01', name: 'Lắng nghe',  desc: 'Gặp gỡ, lắng nghe mong muốn và khảo sát thực địa để hiểu rõ không gian cũng như phong cách sống của bạn.' },
  { num: '02', name: 'Concept & 3D', desc: 'Định hình phong cách, lên bản vẽ concept và dựng hình 3D để bạn hình dung không gian trước khi thi công.' },
  { num: '03', name: 'Thi công',   desc: 'Triển khai theo bản vẽ, giám sát thường xuyên để đảm bảo chất lượng và tiến độ đã cam kết.' },
  { num: '04', name: 'Bàn giao',   desc: 'Kiểm tra từng chi tiết, vệ sinh công trình và bàn giao kèm tài liệu bảo hành.' },
]

// Giá trị thứ 4 "Minh bạch" là đề xuất — chỉnh lại nếu cần
export const VALUES = [
  { num: '01', name: 'Tính xác thực',     desc: 'Mỗi không gian phản ánh đúng cá tính và lối sống của chủ nhân — không theo trào lưu, không copy mẫu có sẵn.' },
  { num: '02', name: 'Sự tỉ mỉ',          desc: 'Từ góc chiếu sáng đến texture vải bọc — mọi chi tiết đều được cân nhắc trước khi chốt phương án.' },
  { num: '03', name: 'Minh bạch',         desc: 'Phạm vi, khối lượng và báo giá được thống nhất rõ ràng trước khi triển khai, để bạn luôn biết mình đang nhận được gì.' },
  { num: '04', name: 'Đồng hành dài lâu', desc: 'Mối quan hệ không kết thúc khi bàn giao. Chúng tôi ở đây cho mọi điều chỉnh nhỏ sau này.' },
]

export const TESTIMONIALS = [
  {
    quote: 'Không gian phòng khách nhà tôi hoàn toàn thay đổi sau khi Nut Shell thiết kế. Từng chi tiết đều được cân nhắc kỹ lưỡng, ánh sáng và vật liệu hài hòa với nhau.',
    name: 'Chị Minh Anh', role: 'Chủ biệt thự, Thủ Đức', initials: 'MA',
  },
  {
    quote: 'Team rất chuyên nghiệp, lắng nghe và hiểu ý tưởng ngay từ buổi đầu tư vấn. Quán cafe của tôi giờ có bản sắc riêng, khách liên tục hỏi về đơn vị thiết kế.',
    name: 'Anh Tuấn Kiệt', role: 'Founder, Café TK Quận 1', initials: 'TK',
  },
  {
    quote: 'Họ không chỉ thiết kế đẹp mà còn tính toán rất kỹ về công năng. Ngôi nhà vừa sang trọng vừa thực sự tiện nghi cho cả gia đình.',
    name: 'Chị Thanh Hà', role: 'Chủ nhà, Nhà phố Bình Dương', initials: 'TH',
  },
]

// Bản nháp — Nut Shell duyệt và chỉnh nội dung trước khi đăng
export const FAQ = [
  {
    q: 'Nut Shell nhận thiết kế những loại công trình nào?',
    a: 'Chúng tôi thiết kế và thi công nhà ở (căn hộ, nhà phố, biệt thự), quán cafe, nhà hàng và các không gian thương mại khác.',
  },
  {
    q: 'Tôi chỉ cần thiết kế, không cần thi công có được không?',
    a: 'Được. Gói Tư vấn & Thiết kế cho phép bạn chọn từng hạng mục — từ khảo sát, concept, diễn họa 3D đến hồ sơ kỹ thuật — hoặc thiết kế tổng thể.',
  },
  {
    q: 'Chi phí thiết kế và thi công được tính như thế nào?',
    a: 'Chi phí phụ thuộc vào diện tích, phạm vi công việc và vật liệu lựa chọn. Sau buổi khảo sát, chúng tôi lập danh mục công việc và báo giá chi tiết để bạn phê duyệt trước khi triển khai.',
  },
  {
    q: 'Buổi tư vấn đầu tiên có mất phí không?',
    a: 'Buổi tư vấn đầu tiên hoàn toàn miễn phí. Bạn chỉ cần chia sẻ nhu cầu và không gian hiện có.',
  },
  {
    q: 'Tôi có được xem trước không gian trước khi thi công không?',
    a: 'Có. Phương án được thể hiện qua phối cảnh 3D trực quan, giúp bạn hình dung rõ không gian và điều chỉnh trước khi thi công.',
  },
  {
    q: 'Một dự án thường mất bao lâu?',
    a: 'Tùy quy mô và phạm vi công việc. Tiến độ dự kiến được xác lập ngay từ bước khảo sát và ghi rõ trong hợp đồng.',
  },
]

// Phần "Dự án" trang chủ: 1 dự án nổi bật + danh sách tên lớn (đổi slug để thay dự án)
export const HOME_WORK = {
  featured: 'villa-longhau',
  list: ['kingdom101', 'indochine', 'penthouse', 'hala-nguyen-hue', 'cf-gau', 'tiem-kem', 'food-court', 'wabi'],
}
