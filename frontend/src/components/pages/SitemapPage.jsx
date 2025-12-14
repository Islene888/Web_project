import React from 'react';
import { Card, Typography, List, Tag, Divider, Space, Row, Col } from 'antd';
import {
  HomeOutlined,
  CodeOutlined,
  UserOutlined,
  BookOutlined,
  PlayCircleOutlined,
  TeamOutlined,
  RocketOutlined,
  BulbOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph, Text } = Typography;

const SitemapPage = () => {
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme();
  const { t } = useTranslation();

  const sitemapData = [
    {
      category: '主要页面',
      icon: <HomeOutlined />,
      pages: [
        {
          title: '首页',
          path: '/',
          description: '平台欢迎页面，展示LeadCode AI算法学习平台的核心功能和特色',
          features: ['平台介绍', 'AI助手卡片', 'AI黑板功能', 'AI面试模拟', 'AI工具集', '影响力指标展示']
        }
      ]
    },
    {
      category: 'AI算法学习系统',
      icon: <CodeOutlined />,
      pages: [
        {
          title: '算法学习中心',
          path: '/algorithm-learning',
          description: 'LeetCode 75精选题目的系统化学习平台',
          features: ['课程目录', '知识图谱', '学习进度跟踪', '算法模式分类', '交互式可视化']
        },
        {
          title: 'AI互动教室',
          path: '/algorithm-learning/classroom/:chapterId/:patternId',
          description: '针对特定算法模式的交互式学习环境',
          features: ['算法可视化', 'AI个性化教学', '实时代码编辑', '智能提示系统', '学习路径推荐']
        }
      ]
    },
    {
      category: '模拟面试系统',
      icon: <UserOutlined />,
      pages: [
        {
          title: '模拟面试中心',
          path: '/interview',
          description: '智能技术面试模拟平台',
          features: ['面试题库', '难度分级', '公司标签', '面试统计', '个性化推荐']
        },
        {
          title: '智能面试会话',
          path: '/interview/session/:problemId',
          description: '一对一AI面试官模拟真实技术面试',
          features: ['实时代码评估', 'AI面试官对话', '多维度评分', '面试报告生成', '改进建议']
        }
      ]
    },
    {
      category: '网站信息',
      icon: <BulbOutlined />,
      pages: [
        {
          title: '网站地图',
          path: '/sitemap',
          description: '完整的网站结构和页面导航',
          features: ['页面层次结构', '功能模块说明', '导航链接', '内容概览']
        }
      ]
    }
  ];

  const handlePageClick = (path) => {
    if (path && !path.includes(':')) {
      navigate(path);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: isDarkTheme
        ? 'linear-gradient(135deg, #0a0e27 0%, #1a1d3e 50%, #2a2d4e 100%)'
        : '#FAF9F6',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* 页面标题 */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Title
            level={1}
            style={{
              color: isDarkTheme ? '#F0F6FC' : '#2D1810',
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '16px',
              background: isDarkTheme
                ? 'linear-gradient(90deg, #F0F6FC, #3B82F6)'
                : 'linear-gradient(90deg, #2D1810, #A0783B)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            网站地图
          </Title>
          <Paragraph
            style={{
              fontSize: '18px',
              color: isDarkTheme ? 'rgba(240, 246, 252, 0.8)' : 'rgba(45, 24, 16, 0.8)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            LeadCode AI算法学习平台完整页面结构和功能导航
          </Paragraph>
        </div>

        {/* 快速导航统计 */}
        <Row gutter={[24, 24]} style={{ marginBottom: '60px' }}>
          <Col xs={24} sm={8}>
            <Card
              style={{
                background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                border: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '16px',
                textAlign: 'center'
              }}
            >
              <RocketOutlined style={{ fontSize: '32px', color: '#3B82F6', marginBottom: '12px' }} />
              <Title level={2} style={{ color: isDarkTheme ? '#F0F6FC' : '#2D1810', margin: 0 }}>
                7
              </Title>
              <Text style={{ color: isDarkTheme ? 'rgba(240, 246, 252, 0.7)' : 'rgba(45, 24, 16, 0.7)' }}>
                总页面数
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              style={{
                background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                border: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '16px',
                textAlign: 'center'
              }}
            >
              <BookOutlined style={{ fontSize: '32px', color: '#10B981', marginBottom: '12px' }} />
              <Title level={2} style={{ color: isDarkTheme ? '#F0F6FC' : '#2D1810', margin: 0 }}>
                4
              </Title>
              <Text style={{ color: isDarkTheme ? 'rgba(240, 246, 252, 0.7)' : 'rgba(45, 24, 16, 0.7)' }}>
                功能模块
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              style={{
                background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                border: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '16px',
                textAlign: 'center'
              }}
            >
              <TrophyOutlined style={{ fontSize: '32px', color: '#F59E0B', marginBottom: '12px' }} />
              <Title level={2} style={{ color: isDarkTheme ? '#F0F6FC' : '#2D1810', margin: 0 }}>
                20+
              </Title>
              <Text style={{ color: isDarkTheme ? 'rgba(240, 246, 252, 0.7)' : 'rgba(45, 24, 16, 0.7)' }}>
                核心功能
              </Text>
            </Card>
          </Col>
        </Row>

        {/* 详细页面列表 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {sitemapData.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              style={{
                background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
                border: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '20px',
                backdropFilter: 'blur(20px)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                <Space align="center" size="middle">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: isDarkTheme
                      ? 'linear-gradient(135deg, #3B82F6, #1D4ED8)'
                      : 'linear-gradient(135deg, #A0783B, #8B5A3C)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: '#fff'
                  }}>
                    {category.icon}
                  </div>
                  <Title
                    level={2}
                    style={{
                      margin: 0,
                      color: isDarkTheme ? '#F0F6FC' : '#2D1810'
                    }}
                  >
                    {category.category}
                  </Title>
                </Space>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {category.pages.map((page, pageIndex) => (
                  <div key={pageIndex}>
                    <Card
                      hoverable
                      onClick={() => handlePageClick(page.path)}
                      style={{
                        background: isDarkTheme ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.6)',
                        border: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.04)',
                        borderRadius: '12px',
                        cursor: page.path && !page.path.includes(':') ? 'pointer' : 'default'
                      }}
                    >
                      <div>
                        <div style={{ marginBottom: '12px' }}>
                          <Space>
                            <Title
                              level={4}
                              style={{
                                margin: 0,
                                color: isDarkTheme ? '#F0F6FC' : '#2D1810'
                              }}
                            >
                              {page.title}
                            </Title>
                            <Tag
                              color={isDarkTheme ? 'blue' : 'orange'}
                              style={{
                                fontFamily: 'Monaco, monospace',
                                fontSize: '12px'
                              }}
                            >
                              {page.path}
                            </Tag>
                          </Space>
                        </div>

                        <Paragraph
                          style={{
                            marginBottom: '16px',
                            color: isDarkTheme ? 'rgba(240, 246, 252, 0.8)' : 'rgba(45, 24, 16, 0.8)'
                          }}
                        >
                          {page.description}
                        </Paragraph>

                        <div>
                          <Text
                            style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              color: isDarkTheme ? 'rgba(240, 246, 252, 0.9)' : 'rgba(45, 24, 16, 0.9)',
                              marginBottom: '8px',
                              display: 'block'
                            }}
                          >
                            主要功能：
                          </Text>
                          <Space wrap>
                            {page.features.map((feature, featureIndex) => (
                              <Tag
                                key={featureIndex}
                                style={{
                                  background: isDarkTheme ? 'rgba(59, 130, 246, 0.1)' : 'rgba(160, 120, 59, 0.1)',
                                  border: isDarkTheme ? '1px solid rgba(59, 130, 246, 0.3)' : '1px solid rgba(160, 120, 59, 0.3)',
                                  color: isDarkTheme ? '#3B82F6' : '#A0783B',
                                  borderRadius: '6px'
                                }}
                              >
                                {feature}
                              </Tag>
                            ))}
                          </Space>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* 页面底部说明 */}
        <Card
          style={{
            marginTop: '40px',
            background: isDarkTheme ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.8)',
            border: isDarkTheme ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.06)',
            borderRadius: '16px',
            textAlign: 'center'
          }}
        >
          <PlayCircleOutlined
            style={{
              fontSize: '48px',
              color: isDarkTheme ? '#3B82F6' : '#A0783B',
              marginBottom: '16px'
            }}
          />
          <Title
            level={3}
            style={{
              color: isDarkTheme ? '#F0F6FC' : '#2D1810',
              marginBottom: '12px'
            }}
          >
            开始您的AI算法学习之旅
          </Title>
          <Paragraph
            style={{
              color: isDarkTheme ? 'rgba(240, 246, 252, 0.8)' : 'rgba(45, 24, 16, 0.8)',
              marginBottom: '24px'
            }}
          >
            点击上方页面链接即可直接访问对应功能模块
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default SitemapPage;