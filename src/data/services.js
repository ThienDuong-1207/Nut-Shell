// Nội dung phần Dịch vụ (#4 trong DESIGN.md) — mỗi dịch vụ là 1 thẻ bấm để mở chi tiết
export const SERVICES = [
  {
    num: '01',
    name: 'Tư vấn & Thiết kế',
    summary: 'Dành cho khách hàng cần giải pháp thiết kế, hồ sơ ý tưởng hoặc phối cảnh nội thất.',
    itemsLabel: 'Gói',
    items: [
      { key: 'A', name: 'Khảo sát & Tư vấn',  desc: 'Khảo sát hiện trạng, lắng nghe nhu cầu và định hướng phong cách thiết kế phù hợp.' },
      { key: 'B', name: 'Thiết kế Concept',   desc: 'Phát triển ý tưởng, bố trí mặt bằng công năng, lựa chọn màu sắc và vật liệu.' },
      { key: 'C', name: 'Diễn họa 3D',        desc: 'Thể hiện không gian qua hình ảnh phối cảnh 3D trực quan, giúp khách hàng hình dung rõ phương án thiết kế.' },
      { key: 'D', name: 'Hồ sơ Kỹ thuật',     desc: 'Triển khai bản vẽ kỹ thuật nội thất phục vụ quá trình thi công theo thiết kế đã thống nhất.' },
      { key: 'E', name: 'Thiết kế Tổng thể',  desc: 'Giải pháp thiết kế đồng bộ từ concept, bố trí công năng đến phối cảnh 3D hoàn thiện.' },
    ],
    note: 'Mỗi dự án đều có nhu cầu và đặc điểm riêng. Liên hệ Nutshell để được tư vấn chi tiết về phạm vi dịch vụ, quy trình và chi phí phù hợp.',
    cta: { label: 'LIÊN HỆ TƯ VẤN', to: '/lien-he' },
  },
  {
    num: '02',
    name: 'Thiết kế & Thi công trọn gói',
    summary: 'Dành cho khách hàng muốn đồng bộ quá trình thiết kế và hoàn thiện công trình.',
    itemsLabel: 'Bước',
    items: [
      { key: '1', name: 'Tư vấn & Khảo sát',          desc: 'Tiếp nhận nhu cầu, khảo sát hiện trạng, xác lập mục tiêu sử dụng, ngân sách và tiến độ dự kiến.' },
      { key: '2', name: 'Thiết kế không gian',        desc: 'Phát triển concept, bố trí mặt bằng, lựa chọn vật liệu và diễn họa phối cảnh 3D.' },
      { key: '3', name: 'Hồ sơ triển khai',           desc: 'Hoàn thiện các bản vẽ kỹ thuật cần thiết theo phạm vi thiết kế và thi công đã thống nhất.' },
      { key: '4', name: 'Báo giá & Lựa chọn vật liệu', desc: 'Lập danh mục công việc, khối lượng, chủng loại vật tư và báo giá thi công để khách hàng phê duyệt.' },
      { key: '5', name: 'Tổ chức thi công',           desc: 'Triển khai các hạng mục theo hợp đồng, phối hợp nhà thầu và kiểm soát sự phù hợp với thiết kế được duyệt.' },
      { key: '6', name: 'Nghiệm thu & Bàn giao',      desc: 'Kiểm tra các hạng mục hoàn thiện, xử lý tồn đọng và bàn giao công trình theo điều kiện hợp đồng.' },
    ],
  },
]
