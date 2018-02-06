'use strict';

(function($){

    $(function() {

        var datascource = {
            'name': '1. 开始',
            'title': '自动化部署',
            'children': [
                { 'name': '2. 备份数据库', 'title': '备份原数据库', 'className': 'middle-level',
                    'children': [
                        { 'name': '3. 下载填写导入模板', 'title': '科室 / 疾病 / 用户', 'className': 'product-dept',
                            'children' : [{'name' : '4. 检测', 'title' : '检测模板 & 数据', 'className' : 'rd-dept',
                                'children' : [{'name' : '5. 创建数据库', 'title' : '创建库表结构', 'className' : 'pipeline1',
                                    'children' : [
                                        {
                                            'name' : '6. 导入科室', 'title' : '科室信息', 'className' : 'frontend1'
                                        },
                                        {
                                            'name' : '6. 导入用户', 'title' : '医务人员信息', 'className' : 'frontend1',
                                                'children' : [{'name' : '7. 公共信息', 'title' : '导入公共数据信息', 'className' : 'warnning',
                                                    'children' : [{'name' : '8. 结束', 'title' : '部署完毕', 'className' : ''}]}]
                                        },
                                        {
                                            'name' : '6. 导入疾病', 'title' : '科室疾病相关信息', 'className' : 'frontend1'
                                        }
                                     ]
                                }]
                            }]
                        },
                    ]
                }
            ]
        };

        $('#chart-container').orgchart({
            'data' : datascource,
            'nodeContent': 'title'
        });

    });

})(jQuery);