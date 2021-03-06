package cn.broccoli.blog.mapper;

import cn.broccoli.blog.po.UserRank;
import cn.broccoli.blog.po.UserRankExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UserRankMapper {
    int countByExample(UserRankExample example);

    int deleteByExample(UserRankExample example);

    int deleteByPrimaryKey(Integer rankId);

    int insert(UserRank record);

    int insertSelective(UserRank record);

    List<UserRank> selectByExample(UserRankExample example);

    UserRank selectByPrimaryKey(Integer rankId);

    int updateByExampleSelective(@Param("record") UserRank record, @Param("example") UserRankExample example);

    int updateByExample(@Param("record") UserRank record, @Param("example") UserRankExample example);

    int updateByPrimaryKeySelective(UserRank record);

    int updateByPrimaryKey(UserRank record);
}